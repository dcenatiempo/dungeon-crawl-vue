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
    <footer>
      <h1 class="dungeon-title">
        {{ isTownLevel ? 'Town' : 'Dungeon' }} Level {{ level + 1 }}
      </h1>
    </footer>
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
    ...mapGetters('dungeon-crawl', ['getExpFromMonst']),
    ...mapGetters('dungeon-crawl/app', [
      'displayGear',
      'displayMarket',
      'toolTip',
    ]),
    ...mapGetters('dungeon-crawl/world', [
      'currentWorld',
      'isTownLevel',
      'levels',
      'getLevel',
    ]),
    ...mapGetters('dungeon-crawl/player', [
      'level',
      'locale',
      'cellLocale',
      'movesRemain',
      'attacksRemain',
      'health',
    ]),
    ...mapGetters('dungeon-crawl/monsters', ['currentMonsters', 'isMonster']),
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
    ...mapActions('dungeon-crawl', ['battle', 'restart']),
    ...mapActions('dungeon-crawl/player', [
      'changeLevel',
      'movePlayer',
      'gainExperience',
      'useAttack',
      'pickUpItems',
    ]),
    ...mapActions('dungeon-crawl/player', { resetPlayerMoves: 'resetMoves' }),
    ...mapActions('dungeon-crawl/world', ['updateVisibility', 'addNewLevel']),
    ...mapActions('dungeon-crawl/monsters', [
      'monsterTurn',
      'populateLevel',
      'monsterLoseHealth',
    ]),
    ...mapActions('dungeon-crawl/market', ['populateMarket']),
    ...mapMutations('dungeon-crawl/app', [
      'setDisplayMarket',
      'setDisplayGear',
    ]),
    movePlayerAction(target) {
      this.movePlayer(target);
      this.updateVisibility(target);
    },
    restartGame() {
      this.$emit('restart');
      this.restart();
    },
    async handleKeypress(e) {
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
      let currentLocale = this.cellLocale; // players current coordinates
      let currentMonsters = this.currentMonsters; // current dungeon monsters list
      let currentWorld = this.currentWorld;
      let targetLocale;
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
      targetLocale = {
        row: currentLocale.row + dir.row,
        col: currentLocale.col + dir.col,
      };

      // does player have any moves left???
      if (this.movesRemain === 0) {
        //console.log("no more moves");
        return;
      }

      const currentCell = currentWorld[currentLocale.row][currentLocale.col];
      const targetCell = currentWorld[targetLocale.row][targetLocale.col];

      // if leaving market...
      if (currentCell.type === 'market') {
        if (targetCell.type !== 'market') this.setDisplayMarket(false);
        if (this.displaySetByMarket) this.setDisplayGear(false);
      }

      const monster = this.isMonster(targetLocale);

      // if targetCell is a wall...
      if (targetCell.type === 'wall') {
        //console.log("you can't walk through walls!");
      }

      // if targetCell is a gate...
      else if (targetCell.type === 'gate') {
        let fromLevel = this.level;
        let toLevel = targetCell.toLevel;
        this.movePlayerAction(targetLocale); // move player onto gate
        this.changeLevel(toLevel); // change players level/location
        if (toLevel >= this.levels) {
          // if this level does not exist then...
          // console.log('creating level ' + toLevel); //
          await this.addNewLevel(toLevel); // create new level
          this.populateLevel(toLevel); // populate new level with monsters
          this.isTownLevel ? this.populateMarket(toLevel) : null;
        }
        this.movePlayerAction(getCoords(fromLevel, toLevel));
      }

      // if targetCell is a market...
      else if (targetCell.type === 'market') {
        // console.log('lets barter!');
        this.movePlayerAction(targetLocale);
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
              vm.gainExperience(vm.getExpFromMonst(currentMonsters[mi]));
            }
          });
        } else this.movePlayerAction(currentLocale); //no more attacks: 'move' player to square already on
      }

      // if targetCell is dead monster
      else if (!monster?.isAlive && monster?.hasGear) {
        this.pickUpItems(targetLocale);
        this.movePlayerAction(targetLocale);
      }

      // if targetCell is open ground...
      else if (targetCell.type === 'floor') {
        this.movePlayerAction(targetLocale);
      }
    },
  },
};
</script>

<style lang="scss">
$header-height: 50px;

#dungeon-crawl .game-screen {
  position: relative;
  display: flex;
  flex-flow: column nowrap;

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

  footer {
    .dungeon-title {
      color: lightgray;
      text-align: center;
      margin: 10px 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
