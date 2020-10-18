<template>
  <div
    v-if="inBounds"
    :class="`cell ${classes}`"
    :style="styles"
    @mouseover="inspectorClick"
  >
    {{ tileText }}
    <!-- <Alert v-if="isPlayer" /> -->
  </div>
  <div v-else class="void" :style="styles" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// import Alert from './Alert.vue';

export default {
  props: {
    cell: { type: Array, required: true },
    isPlayer: { type: Boolean, default: false },
    mID: { type: [Number, Boolean], default: false },
    inBounds: { type: Boolean, default: false },
  },
  data: () => ({}),
  computed: {
    ...mapGetters('app', [
      'tileSize',
      'toolTip',
      'mouseX',
      'mouseY',
      'toolTipObject',
    ]),
    ...mapGetters('world', ['currentWorld']),
    ...mapGetters('monsters', [
      'currentMonsters',
      'isAliveMonster',
      'isDeadMonster',
    ]),
    ...mapGetters('player', ['level']),
    ...mapGetters('market', ['currentMarket']),
    tile() {
      return this.inBounds
        ? this.currentWorld[this.cell[0]][this.cell[1]]
        : null;
    },
    tileText() {
      const tile = this.tile;
      return (
        (tile?.type === 'gate' &&
          tile?.vis &&
          tile?.fog < 1 &&
          !this.isPlayer &&
          `${tile.toLevel + 1}`) ||
        ''
      );
    },
    classes() {
      return !this.tile
        ? ''
        : this.tile.type +
            ' vis-' +
            this.tile.vis +
            (this.tile.fog >= 1
              ? ' fog'
              : (!this.isPlayer ? '' : ' player') +
                (this.mID === false
                  ? ''
                  : this.isAliveMonster(this.cell) !== false
                  ? this.currentMonsters[this.mID].flash
                    ? ' monster damaged'
                    : ' monster'
                  : this.isDeadMonster(this.cell) === false
                  ? ''
                  : ' dead'));
    },
    styles() {
      const tileSize = this.tileSize;
      return `height: ${tileSize}px;  width: ${tileSize}px; margin: ${tileSize /
        12.5}px`;
    },
  },
  methods: {
    ...mapActions('app', ['updateToolTip']),
    toggleToolTip(x, y, obj) {
      this.updateToolTip({
        mouseX: x,
        mouseY: y,
        toolTipObject: obj,
      });
    },
    inspectorClick(e) {
      const x = e.clientX;
      const y = e.clientY;
      const target = [this.cell[0], this.cell[1]];
      const tile = this.tile;

      // console.log(target)
      // console.log(tile.type)

      const currentMonsters = this.currentMonsters;
      const aliveMonster = this.isAliveMonster(target);
      if (aliveMonster !== false) {
        let monster = currentMonsters[aliveMonster];
        this.toggleToolTip(x, y, monster);
        return;
      }
      const deadMonster = this.isDeadMonster(target);
      if (deadMonster !== false) {
        let corpse = currentMonsters[deadMonster];
        this.toggleToolTip(x, y, corpse);
      } else if (tile.type === 'gate') {
        this.toggleToolTip(x, y, tile);
      } else if (tile.type === 'market') {
        this.toggleToolTip(x, y, this.currentMarket);
      }
    },
  },
};
</script>

<style lang="scss">
.dungeon-title {
  color: lightgray;
  text-align: center;
  margin: 10px 0;
}
.row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.cell {
  position: relative;
}
.temp-stats {
  justify-content: space-around;
}
.void {
  @extend .cell;
  background: #262626;
}
.floor {
  @extend .cell;
  background: green;
  border: solid;
  border-width: 0.5px;
  border-color: forestgreen;
}
.wall {
  @extend .cell;
  background: #888;
}
.market {
  @extend .cell;
  background: orange;
}
.gate {
  @extend .cell;
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}
.fog {
  filter: brightness(50%);
}
.dead {
  background: olive;
}
.monster {
  background: brown;
  border-color: brown;
}
.player {
  background: blue;
  border-color: blue;
}
.damaged {
  border: solid;
  border-color: white;
}
.vis-false {
  background: #262626;
  border: none;
  filter: none;
  box-shadow: none;
}
</style>
