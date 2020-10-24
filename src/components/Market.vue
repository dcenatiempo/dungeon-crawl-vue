<template>
  <div class="market modal-box">
    <h3>Market</h3>
    <ModalLabelRow box="market" is-market />
    <template v-for="(thing, i) in currentMarket.bag">
      <ModalContentRow
        :key="i"
        :index="i"
        :item="thing"
        box="market"
        is-market
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ModalContentRow from './ModalContentRow.vue';
import ModalLabelRow from './ModalLabelRow.vue';
import { TOWN_EVERY } from '../lib/constants';

export default {
  components: { ModalContentRow, ModalLabelRow },
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters('dungeon-crawl/player', ['level']),
    ...mapGetters('dungeon-crawl/market', ['currentMarket']),
    ...mapGetters('dungeon-crawl/app', ['displayMarket']),
    marketId() {
      return this.level / TOWN_EVERY;
    },
    bag() {
      return this.market[this.marketId];
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="scss">
.market {
  background: rgba(255, 255, 255, 0.5);
}
</style>
