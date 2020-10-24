<template>
  <div class="start-screen">
    <h1>Welcom to Dungeon Crawl</h1>

    <button @click="$emit('start')"><h2>Start Game</h2></button>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
.start-screen {
  height: 100%;
  background: #262626;
  padding: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  button {
    padding: 20px;
    background: darkred;
    color: black;
    border: none;
    border-radius: 10px;
  }
}
</style>
