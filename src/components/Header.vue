<template>
  <div class="header">
    <button @click="toggleGear">
      Gear
    </button>
    <div>
      Rarity Tolerance
      <input
        class="slider"
        type="range"
        value="1"
        min="1"
        max="10"
        step="1"
        @input="changeRarity"
      />
    </div>
    <div>
      Zoom
      <input
        class="slider"
        type="range"
        value="25"
        min="10"
        max="100"
        step="1"
        @input="changeZoom"
      />
    </div>
    <div class="flex-col">
      <div>Level: {{ expLevel }}</div>
      <div>Exp: {{ experience }}/100</div>
    </div>
    <div class="flex-col">
      <div>Health: {{ health }}/{{ maxHealth }}</div>
      <div>Gold: {{ gold }}</div>
    </div>
    <div class="flex-col">
      <div>Moves Remain: {{ movesRemain }}</div>
      <div>Attacks Remain: {{ attacksRemain }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {},
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters('dungeon-crawl/app', [
      'rarityTolerance',
      'displayGear',
      'tileSize',
    ]),
    ...mapGetters('dungeon-crawl/player', [
      'expLevel',
      'experience',
      'health',
      'maxHealth',
      'movesRemain',
      'attacksRemain',
      'bag',
      'gold',
      'food',
    ]),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapMutations('dungeon-crawl/app', [
      'setDisplayMarket',
      'setRarityTolerance',
      'setTileSize',
      'setDisplayGear',
    ]),
    toggleMarket() {
      this.setDisplayMarket(!this.displayMarket);
    },
    changeRarity(e) {
      this.setRarityTolerance(e.target.value);
    },
    changeZoom(e) {
      this.setTileSize(e.target.value);
    },
    toggleGear() {
      this.setDisplayGear(!this.displayGear);
    },
  },
};
</script>

<style lang="scss">
$thumb-height: 20px;
$thumb-width: 20px;
$slider-width: 20%;
$slider-height: 5px;
$header-height: 50px;

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background: black;
  color: lightgray;
  width: 100%;
  height: $header-height;
  justify-content: space-around;
  padding: 5px;

  input[type='range'].slider {
    -webkit-appearance: none;
    width: 100%;
    margin-top: 10px;
    padding-right: 10px;
  }
  input[type='range'].slider:focus {
    outline: none;
  }
  input[type='range'].slider::-webkit-slider-runnable-track {
    width: $slider-width;
    height: $slider-height;
    cursor: pointer;
    background: white;
    border-radius: 100%;
    border: none;
  }
  input[type='range'].slider::-webkit-slider-thumb {
    border: 2px solid white;
    height: $thumb-height;
    width: $thumb-width;
    border-radius: 4px;
    background: yellow;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -$thumb-height/2;
  }
  input[type='range'].slider:focus::-webkit-slider-runnable-track {
    background: red;
  }
  input[type='range'].slider::-moz-range-track {
    width: $slider-width;
    height: $slider-height;
    cursor: pointer;
    background: #ebeced;
    border-radius: 0px;
    border: none;
  }
  input[type='range'].slider::-moz-range-thumb {
    border: 2px solid white;
    height: $thumb-height;
    width: $thumb-width;
    border-radius: 4px;
    background: #585859;
    cursor: pointer;
  }
  input[type='range'].slider::-ms-track {
    width: $slider-width;
    height: $slider-height;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range'].slider::-ms-fill-lower {
    background: white;
    border: none;
    border-radius: 0px;
  }
  input[type='range'].slider::-ms-fill-upper {
    background: white;
    border: none;
    border-radius: 0px;
  }
  input[type='range'].slider::-ms-thumb {
    border: 2px solid white;
    width: $thumb-width;
    border-radius: 4px;
    background: yellow;
    cursor: pointer;
    height: $thumb-height;
  }
  input[type='range'].slider:focus::-ms-fill-lower {
    background: red;
  }
  input[type='range'].slider:focus::-ms-fill-upper {
    background: red;
  }
}
</style>
