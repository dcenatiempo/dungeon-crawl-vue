<template>
  <div class="world-grid world">
    <div v-for="(row, ri) in virtualWorld" :key="ri" class="row">
      <Cell
        v-for="(cell, ci) in row"
        :key="`${ri}-${ci}`"
        :cell="cell"
        :is-player="isPlayer(cell)"
        :m-i-d="isAnyMonster(cell)"
        :in-bounds="isInBounds(cell)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Cell from './Cell.vue';
import { add } from '../lib/utils';

export default {
  components: {
    Cell,
  },
  props: {},
  computed: {
    ...mapGetters('app', ['grid']),
    ...mapGetters('world', ['currentWorld', 'isTownLevel', 'isInBounds']),
    ...mapGetters('player', ['locale', 'isPlayer']),
    ...mapGetters('monsters', ['isAnyMonster']),
    virtualWorld() {
      let { height, width } = this.grid;
      let start = [
        Math.round(this.locale[0] - height / 2) + 1,
        Math.round(this.locale[1] - width / 2),
      ]; // top left corner
      if (this.isTownLevel) {
        start[0] = -2;
        start[1] = Math.round(this.currentWorld.length / 2 - width / 2);
      }
      if (height < 11) start[0] -= 2;
      let end = add(start, [height, width]);
      let virtualWorld = [];
      let i = 0;
      for (let r = start[0]; r < end[0]; r++) {
        virtualWorld.push([]);
        for (let c = start[1]; c < end[1]; c++) {
          virtualWorld[i].push([r, c]);
        }
        i++;
      }
      return virtualWorld;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.world {
  background: #262626;
  height: calc(100vh - 50px);

  &.world-grid {
    grid-column: 2;
    grid-row: 2 / 4;
    z-index: 1;
  }
  .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
}
</style>
