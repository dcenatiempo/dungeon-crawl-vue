<template>
  <div class="bag modal-box">
    <h3>Rucksack {{ carryAmount / carryCapacity }}</h3>
    <ModalLabelRow box="bag" :is-market="displayMarket" />
    <template v-for="(thing, i) in bag">
      <ModalContentRow
        :key="i"
        :index="i"
        :item="thing"
        box="bag"
        :is-market="displayMarket"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ModalContentRow from './ModalContentRow.vue';
import ModalLabelRow from './ModalLabelRow.vue';

export default {
  components: { ModalContentRow, ModalLabelRow },
  computed: {
    ...mapGetters('app', ['displayMarket']),
    ...mapGetters('player', ['bag', 'carryAmount', 'carryCapacity']),
  },
};
</script>

<style lang="scss">
.bag {
  background: rgba(255, 255, 255, 0.5);
}
</style>
