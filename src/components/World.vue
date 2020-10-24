<template>
  <div class="world">
    <canvas
      id="canvas"
      :height="canvasHeight"
      :width="canvasWidth"
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
  flash: 'rgba(200, 200, 200, 1)',
};

// import Cell from './Cell.vue';
// import { add } from '../lib/utils';
import { TILE_BORDER } from '../lib/constants';

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
    ...mapGetters('dungeon-crawl/app', ['grid', 'tileSize', 'dimensions']),
    ...mapGetters('dungeon-crawl/world', ['currentWorld', 'isTownLevel']),
    ...mapGetters('dungeon-crawl/player', [
      'locale',
      'isPlayer',
      'alerts',
      'flash',
    ]),
    ...mapGetters('dungeon-crawl/monsters', ['isMonster', 'currentMonsters']),
    tileBorder() {
      return this.tileSize * TILE_BORDER;
    },
    canvasHeight() {
      return this.dimensions.h;
    },
    canvasWidth() {
      return this.dimensions.w;
    },
    canvasCenter() {
      return {
        x: this.canvasWidth / 2,
        y: this.canvasHeight / 2,
      };
    },
    cameraCoords() {
      return this.getWorldCoords(this.locale);
    },
    worldOffset() {
      return {
        x: this.canvasCenter.x - this.cameraCoords.x,
        y: this.canvasCenter.y - this.cameraCoords.y,
      };
    },
  },
  watch: {},
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    const vm = this;
    // no initial render without setTimeout
    setInterval(() => vm.drawWorld(), 333);
  },
  methods: {
    getWorldCoords({ row, col }) {
      return {
        x: col * this.tileSize,
        y: row * this.tileSize,
      };
    },
    getCanvasCoords({ row, col }) {
      const worldCoords = this.getWorldCoords({ row, col });

      return {
        x: worldCoords.x + this.worldOffset.x,
        y: worldCoords.y + this.worldOffset.y,
      };
    },
    handleClick() {},
    fog(color) {
      return color.replace('1)', '0.5)');
    },
    drawCell({ row, col }) {
      const tileCenter = this.getCanvasCoords({ row, col });

      // is cell completely out of canvas bounds?
      const left = tileCenter.x - this.tileSize / 2;
      if (left > this.canvasWidth) return;
      const right = tileCenter.x + this.tileSize / 2;
      if (right < 0) return;
      const top = tileCenter.y - this.tileSize / 2;
      if (top > this.canvasHeight) return;
      const bottom = tileCenter.y + this.tileSize / 2;
      if (bottom < 0) return;

      const cell = this.currentWorld[row][col];

      // is it visible by the player?
      if (!cell.vis) return;

      const size = this.tileSize - this.tileBorder;
      const x = left;
      const y = top;
      let color = colors[cell.type];
      if (this.isPlayer({ row, col }))
        color = this.flash ? colors.flash : colors.player;

      const monster = this.isMonster({ row, col });
      if (monster?.isAlive)
        color = monster.hasFlash ? colors.flash : colors.monster;
      else if (monster?.hasGear) color = colors.dead;
      color = cell.fog < 1 ? color : this.fog(color);
      this.ctx.fillStyle = color;

      this.ctx.fillRect(x, y, size, size);
    },
    drawWorld() {
      const vm = this;

      // draw background
      this.ctx.fillStyle = colors.background;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.currentWorld.forEach((row, ri) => {
        row.forEach((col, ci) => {
          vm.drawCell({ row: ri, col: ci });
        });
      });
    },
  },
};
</script>

<style lang="scss">
.world {
  background: #262626;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
