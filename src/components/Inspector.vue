<template>
  <div class="inspector">
    <div
      v-if="!item.type"
      class="modal-box"
      :style="`top: ${top}; left: ${left} `"
    >
      <div class="market-inspect-modal-row">
        <div class="label">Item</div>
        <div class="label center">Qty</div>
        <div class="label center">Price</div>
      </div>
      <div
        v-for="(thing, i) in item.bag"
        :key="i"
        class="market-inspect-modal-row"
      >
        <div class="box">{getName(thing)}</div>
        <div class="box center">
          {{ thing.amount ? thing.amount : '1' }}
        </div>
        <div class="box center">
          {{ thing.type === 'gold' ? null : `$${getMarketPrice(thing)}` }}
        </div>
      </div>
    </div>
    <div
      v-else-if="item.type === 'gate'"
      class="modal-box test"
      :style="`top: ${top}; left: ${left} `"
    >
      <h3>{{ item.type }}</h3>
      <div>To level {{ item.toLevel + 1 }}</div>
    </div>
    <div
      v-else-if="item.type === 'player'"
      class="modal-box test"
      :style="`top: ${top}; left: ${left} `"
    >
      <Stats char="player" />
    </div>
    <div
      v-else-if="isAliveMonster(item.locale) !== false"
      class="modal-box test"
      :style="`top: ${top}; left: ${left} `"
    >
      <Stats :char="item" />
    </div>
    <div
      v-else-if="isDeadMonster(item.local) !== false"
      class="modal-box test"
      :style="`top: ${top}; left: ${left} `"
    >
      <h3>Dead {{ item.type }}</h3>
      <div v-if="item.food > 0">Food: {{ item.food }}</div>
      <div v-if="item.gold > 0">Gold: {{ item.gold }}</div>
      <div v-if="item.armor.name === 'no armor'">
        Armor: {{ item.armor.material }} {{ item.armor.name }}
      </div>
      <div v-if="item.weapon.name !== 'fist'">
        Weapon: {{ item.weapon.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Stats from './Stats';

export default {
  components: { Stats },
  props: {},
  data: () => ({
    item: null,
    top: 0,
    leftt: 0,
  }),
  computed: {
    ...mapGetters(['getMarketPrice']),
    ...mapGetters('app', ['toolTip', 'toolTipObject', 'mouseX', 'mouseY']),
    ...mapGetters('monsters', ['isAliveMonster', 'isDeadMonster']),
  },
  watch: {
    toolTipObject() {
      this.item = this.toolTipObject;
      this.top = parseInt(this.mouseY) - 0 + 'px';
      this.left = parseInt(this.mouseX) - 50 + 'px';
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss">
.inspector {
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  z-index: 50;
  pointer-events: none;
}
</style>
