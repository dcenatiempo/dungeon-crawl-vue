<template>
  <div id="dungeon-crawl">
    <StartScreen v-if="screen === 'start'" @start="screen = 'game'" />
    <SetupScreen v-if="screen === 'setup'" />
    <GameScreen v-if="screen === 'game'" @restart="screen = 'start'" />
  </div>
</template>

<script>
import state from './state';
import StartScreen from './components/StartScreen.vue';
import SetupScreen from './components/SetupScreen.vue';
import GameScreen from './components/GameScreen.vue';

export default {
  components: {
    StartScreen,
    SetupScreen,
    GameScreen,
  },
  data: () => ({
    screen: 'start', // 'start', 'setup', 'game'
    resizeObserver: null,
  }),
  computed: {},
  created() {
    this.$store.registerModule('dungeon-crawl', state);
  },
  mounted() {
    const vm = this;

    // Set up global resize listener so set app container dimensions - { h, w }
    function resizeFinished(entries) {
      for (const entry of entries) {
        if (entry.borderBoxSize) {
          console.log('w', entry.borderBoxSize[0].inlineSize);
          console.log('h', entry.borderBoxSize[0].blockSize);
          vm.$store.commit('dungeon-crawl/app/setDimensions', {
            h: entry.borderBoxSize[0].blockSize,
            w: entry.borderBoxSize[0].inlineSize,
          });
        }
      }
    }

    let timout;

    const appWindow = document.querySelector('#dungeon-crawl');

    this.resizeObserver = new ResizeObserver(entries => {
      clearTimeout(timout);
      timout = setTimeout(() => resizeFinished(entries), 20);
    });

    this.resizeObserver.observe(appWindow);
  },
  beforeDestroy() {
    // https://github.com/championswimmer/vuex-persist/issues/80
    this.$store.unregisterModule('dungeon-crawl');

    this.resizeObserver?.disconnect();
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
  height: 100%;
}
body {
  height: 100%;
  overflow: auto;
  margin: 0;
  background: #262626;
}

#dungeon-crawl {
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
  }
  .flex-row {
    display: flex;
    flex-flow: row wrap;
  }
  .flex-col {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
