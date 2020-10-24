<template>
  <div class="gear modal-box">
    <h3>Armed Gear</h3>
    <ModalLabelRow box="body" :is-market="displayMarket" />
    <template v-for="(thing, i) in body">
      <ModalContentRow
        :key="i"
        :index="i"
        :item="thing"
        box="body"
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
    ...mapGetters('dungeon-crawl/app', ['displayMarket']),
    ...mapGetters('dungeon-crawl/player', ['body']),
  },
};
</script>

<style lang="scss">
#dungeon-crawl .gear {
  background: rgba(255, 255, 255, 0.5);
}
</style>
