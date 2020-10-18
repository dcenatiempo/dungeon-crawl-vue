<template>
  <div class="market modal-box">
    <h3>Market</h3>
    <ModalLabelRow box="market" :is-market="true" />
    <template v-for="(thing, i) in bag">
      <ModalContentRow
        :key="i"
        :index="i"
        :item="thing"
        box="market"
        is-market="true"
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
    ...mapGetters('player', ['level']),
    ...mapGetters('market', ['market']),
    ...mapGetters('app', ['displayMarket']),
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
}
</style>
