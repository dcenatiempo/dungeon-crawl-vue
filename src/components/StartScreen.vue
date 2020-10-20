<template>
  <div class="start-screen">
    Welcom to Dungeon Crawl

    <button @click="$emit('start')">Start Game</button>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
.start-screen {
}
</style>
