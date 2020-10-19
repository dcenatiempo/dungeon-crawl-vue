<template>
  <!-- <div class="world-grid world">
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
  </div> -->
  <div class="world">
    <canvas
      id="canvas"
      :height="grid.height * tileSize"
      :width="grid.width * tileSize"
      @click="handleClick"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const colors = {
  background: 'rgba(38, 38, 38, 1)',
  wall: 'rgba(136, 136, 136, 1)',
  floor: 'rgba(4, 128, 4, 1)',
  player: 'rgba(22, 1, 255, 1)',
  market: 'rgba(255, 165, 0, 1)',
  gate: 'rgba(128, 1, 128, 1)',
  monster: 'rgba(162, 42, 42, 1)',
  dead: 'rgba(128, 128, 0, 1)',
};

// import Cell from './Cell.vue';
import { add } from '../lib/utils';

export default {
  components: {
    // Cell,
  },
  props: {},
  data: () => ({
    canvas: null,
    ctx: null,
  }),
  computed: {
    ...mapGetters('app', ['grid', 'tileSize']),
    ...mapGetters('world', ['currentWorld', 'isTownLevel', 'isInBounds']),
    ...mapGetters('player', ['locale', 'isPlayer']),
    ...mapGetters('monsters', [
      'isAnyMonster',
      'currentMonsters',
      'isAliveMonster',
      'isDeadMonster',
    ]),
    tileBorder() {
      return this.tileSize / 10;
    },
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
  watch: {
    virtualWorld() {
      this.drawWorld();
    },
    currentMonsters() {
      this.drawWorld();
    },
  },
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  },
  methods: {
    handleClick() {},
    fog(color) {
      return color.replace('1)', '0.5)');
    },
    drawCell(ri, ci) {
      const cell = this.virtualWorld[ri][ci];
      // is it in the bounds of the world?
      if (!this.isInBounds(cell)) return;

      const tile = this.currentWorld[cell[0]][cell[1]];
      // is it visiible by the player?
      if (!tile.vis) return;

      const size = this.tileSize;
      const x = (size + this.tileBorder) * ci; // x coordinate
      const y = (size + this.tileBorder) * (ri + 0.5); // y coordinate
      let color = colors[tile.type];
      if (this.isPlayer(cell)) color = colors.player;
      else if (this.isAliveMonster(cell)) color = colors.monster;
      else if (this.isDeadMonster(cell)) color = colors.dead;
      color = tile.fog < 1 ? color : this.fog(color);
      this.ctx.fillStyle = color;

      this.ctx.fillRect(x, y, size, size);
    },
    drawWorld() {
      // draw background
      this.ctx.fillStyle = colors.background;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // draw each cell
      this.virtualWorld.forEach((row, ri) => {
        row.forEach((col, ci) => {
          this.drawCell(ri, ci);
        });
      });
    },
  },
};
</script>

<style lang="scss">
.world {
  background: #262626;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
