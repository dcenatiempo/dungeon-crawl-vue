<template>
  <div class="game-screen">
    <Header />
    <World />
    <template v-if="displayGear">
      <div id="l-sidebar" class="left-sidebar-grid">
        <Bag />
        <Gear />
      </div>
    </template>
    <template v-if="displayMarket">
      <div id="r-sidebar" class="right-sidebar-grid">
        <Market />
      </div>
    </template>
    <h1 class="dungeon-title footer-grid">
      {{ isTownLevel ? 'Town' : 'Dungeon' }} Level {{ level + 1 }}
    </h1>
    <Inspector v-if="toolTip" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

import Header from './Header';
import World from './World';
import Bag from './Bag';
import Gear from './Gear';
import Market from './Market';
import Inspector from './Inspector';

import { sleep } from '../lib/utils';

export default {
  components: {
    Header,
    World,
    Bag,
    Gear,
    Market,
    Inspector,
  },
  props: {},
  data: () => ({
    displaySetByMarket: false,
  }),
  computed: {
    ...mapGetters(['getExpFromMonst']),
    ...mapGetters('app', ['displayGear', 'displayMarket', 'toolTip']),
    ...mapGetters('world', [
      'currentWorld',
      'isTownLevel',
      'levels',
      'getLevel',
    ]),
    ...mapGetters('player', [
      'level',
      'locale',
      'movesRemain',
      'attacksRemain',
      'health',
    ]),
    ...mapGetters('monsters', ['currentMonsters', 'isMonster']),
  },
  watch: {
    health(health) {
      if (health <= 0) this.restartGame();
    },
    movesRemain(val) {
      if (val > 0) return;
      // check to see if any monsters on non-foggy squares
      let countMonst = 0;
      const currentWorld = this.currentWorld;
      const currentMonsters = this.currentMonsters;
      currentMonsters
        .reduce((mList, m, i) => {
          if (
            currentWorld[m.locale.row][m.locale.col].fog === 0 &&
            m.health > 0
          ) {
            countMonst++;
            mList.push(i);
            return mList;
          } else return mList;
        }, [])
        .forEach((mi, i) =>
          sleep((i + 1) * 200).then(() => {
            this.monsterTurn(mi);
          })
        );

      const delay = countMonst ? 200 + countMonst * 200 : 0;

      sleep(delay).then(() => {
        this.resetPlayerMoves();
      });
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeypress);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeypress);
  },
  methods: {
    ...mapActions(['battle', 'restart']),
    ...mapActions('player', [
      'changeLevel',
      'movePlayer',
      'gainExperience',
      'useAttack',
      'pickUpItems',
    ]),
    ...mapActions('player', { resetPlayerMoves: 'resetMoves' }),
    ...mapActions('world', ['updateVisibility', 'addNewLevel']),
    ...mapActions('monsters', [
      'monsterTurn',
      'populateLevel',
      'monsterLoseHealth',
    ]),
    ...mapActions('market', ['populateMarket']),
    ...mapMutations('app', ['setDisplayMarket', 'setDisplayGear']),
    movePlayerAction(target) {
      this.movePlayer(target);
      this.updateVisibility(target);
    },
    restartGame() {
      this.$emit('restart');
      this.restart();
    },
    handleKeypress(e) {
      const vm = this;
      function getCoords(fromLevel, toLevel) {
        let nextLevel = vm.getLevel(toLevel);
        let coords;
        for (let r = 1; r < nextLevel.length - 1; r++) {
          for (let c = 1; c < nextLevel[1].length - 1; c++) {
            if (nextLevel[r][c].type === 'gate') {
              // console.log('found a gate!!! at ' + r + ',' + c);

              if (nextLevel[r][c].toLevel === fromLevel) {
                coords = { row: r, col: c };
                // reset c and r to exit loop
                c = nextLevel[1].length;
                r = nextLevel.length;
                //console.log("placing player at gate at "+coords.row+" "+coords.col)
              }
            }
          }
        }
        // console.log('Level: ' + toLevel + ' coords: ' + coords);
        return coords;
      }

      //console.log("keypress: "+e.keyCode);
      let currCell = this.locale; // players current coordinates
      let currentMonsters = this.currentMonsters; // current dungeon monsters list
      let currentWorld = this.currentWorld;
      let tarCell;
      let kp = e.keyCode || e.which;
      let dir; // [row direction, col direction]
      switch (kp) {
        case 55: // 7
          dir = { row: -1, col: -1 };
          break;
        case 38: // up arrow
        case 56: // 8
          dir = { row: -1, col: 0 };
          break;
        case 57: // 9
          dir = { row: -1, col: 1 };
          break;
        case 37: // left arrow
        case 52: // 4
          dir = { row: 0, col: -1 };
          break;
        case 39: // right arrow
        case 54: // 6
          dir = { row: 0, col: 1 };
          break;
        case 49: // 1
          dir = { row: 1, col: -1 };
          break;
        case 40: // down arrow
        case 50: // 2
          dir = { row: 1, col: 0 };
          break;
        case 51: // 3
          dir = { row: 1, col: 1 };
          break;
        // REST/SKIP MOVE
        case 32: // space
        case 82: // R
        case 53: // 5
          dir = { row: 0, col: 0 };
          break;
        default:
          dir = undefined;
      }
      if (!dir) return;

      // targetCell is potential future location of player
      tarCell = { row: currCell.row + dir.row, col: currCell.col + dir.col };

      // does player have any moves left???
      if (this.movesRemain === 0) {
        //console.log("no more moves");
        return;
      }

      // if leaving market...
      if (currentWorld[currCell.row][currCell.col].type === 'market') {
        if (currentWorld[tarCell.row][tarCell.col].type !== 'market')
          this.setDisplayMarket(false);
        if (this.displaySetByMarket) this.setDisplayGear(false);
      }

      const monster = this.isMonster(tarCell);

      // if targetCell is a wall...
      if (currentWorld[tarCell.row][tarCell.col].type === 'wall') {
        //console.log("you can't walk through walls!");
      }

      // if targetCell is a gate...
      else if (currentWorld[tarCell.row][tarCell.col].type === 'gate') {
        let fromLevel = this.level;
        let toLevel = currentWorld[tarCell.row][tarCell.col].toLevel;
        this.movePlayerAction(tarCell); // move player onto gate
        this.changeLevel(toLevel); // change players level/location
        if (toLevel >= this.levels) {
          // if this level does not exist then...
          // console.log('creating level ' + toLevel); //
          this.addNewLevel(toLevel); // create new level
          this.populateLevel(toLevel); // populate new level with monsters
          this.isTownLevel ? this.populateMarket(toLevel) : null;
        }
        this.movePlayerAction(getCoords(fromLevel, toLevel));
      }

      // if targetCell is a market...
      else if (currentWorld[tarCell.row][tarCell.col].type === 'market') {
        // console.log('lets barter!');
        this.movePlayerAction(tarCell);
        if (!this.displayMarket) {
          this.setDisplayMarket(true);
        }
        if (!this.displayGear) {
          this.displaySetByMarket = true;
          this.setDisplayGear(true);
        } else {
          this.displaySetByMarket = false;
        }
      }

      // if targetCell is a monster...
      else if (monster?.isAlive) {
        let mi = monster.index;
        // check to see if player has any attacks left
        if (this.attacksRemain >= 1) {
          this.useAttack();
          //console.log("Attack "+currentMonsters[m].type+"!");
          this.battle({ index: mi, attacker: false }).then(damage => {
            vm.monsterLoseHealth({ index: mi, damage });
            const monsterKilled = !vm.isMonster(mi)?.isAlive;
            if (monsterKilled) {
              //console.log("earn experience "+getExpFromMonst(currentMonsters[m]))
              //vm.props.addPlayerAlert(("+"+getExpFromMonst(currentMonsters[m])+" experience"))
              vm.gainExperience(vm.getExpFromMonst(currentMonsters[mi]));
            }
          });
        } else this.movePlayerAction(currCell); //no more attacks: 'move' player to square already on
      }

      // if targetCell is dead monster
      else if (!monster?.isAlive && monster?.hasGear) {
        //console.log("pick up items");
        this.pickUpItems(tarCell);
        this.movePlayerAction(tarCell);
      }

      // if targetCell is open ground...
      else if (currentWorld[tarCell.row][tarCell.col].type === 'floor') {
        this.movePlayerAction(tarCell);
      }
    },
  },
};
</script>

<style lang="scss">
$header-height: 50px;

.game-screen {
  .left-sidebar-grid {
    z-index: 10;
    position: fixed;
    top: $header-height;
    bottom: 0;
    left: 0;
    opacity: 0.85;
  }
  .right-sidebar-grid {
    z-index: 10;
    position: fixed;
    top: $header-height;
    bottom: 0;
    right: 0;
    opacity: 0.85;
  }
  .dungeon-title {
    color: lightgray;
    text-align: center;
    margin: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .footer-grid {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    z-index: 20;
    pointer-events: none;
  }
}
</style>
