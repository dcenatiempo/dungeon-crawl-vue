<template>
  <div id="dungeon-crawl">
    <StartScreen v-if="screen === 'start'" @start="screen = 'game'" />
    <SetupScreen v-if="screen === 'setup'" />
    <GameScreen v-if="screen === 'game'" @restart="screen = 'start'" />
  </div>
</template>

<script>
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
  }),
  computed: {},
  mounted() {
    const vm = this;
    // Set up global resize listener so set browser window dimensions - { h, w }
    function resizeFinished() {
      getWindowSize();
    }

    function getWindowSize() {
      let vpWidth = window.innerWidth;
      let vpHeight = window.innerHeight;
      let h = Math.floor(vpHeight);
      let w = Math.floor(vpWidth);

      vm.$store.commit('app/setDimensions', { h, w });
    }

    let timout;

    window.onresize = function() {
      clearTimeout(timout);
      timout = setTimeout(resizeFinished, 20);
    };

    getWindowSize();
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
