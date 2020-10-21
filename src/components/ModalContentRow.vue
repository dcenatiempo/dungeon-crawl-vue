<template>
  <div class="modal-content-row">
    <div class="box">{{ item.type }}</div>
    <div class="box">{{ getName(item) }}</div>
    <div class="box center">
      {{ boxText }}
    </div>

    <template v-if="isMarket && item">
      <template v-if="box !== 'market'">
        <div v-if="!shouldDisplay" class="box" />
        <div v-else class="box">{{ getPlayerPrice(item) }}</div>
      </template>
      <div v-else class="box">${{ getMarketPrice(item) }}</div>
    </template>

    <template v-else>
      <div v-if="!shouldDisplay" class="box" />
      <template v-else-if="box === 'bag'">
        <div v-if="item.type === 'gold' || item.type === 'rock'" class="box" />
        <template
          v-else-if="
            (item.type === 'food' && item.amount >= 0) || item.type !== 'food'
          "
        >
          <div
            v-if="
              body.find(i => i.type === item.type) &&
                body.find(i => i.type === item.type).name !== 'fist'
            "
            class="box"
          />
          <button
            v-else
            class="box center"
            @click="e => armItemInner({ label: e.target.innerHTML, index })"
          >
            {{ item.type === 'food' ? 'Eat' : 'Eqp' }}
          </button>
        </template>
      </template>
      <template v-else-if="box === 'body'">
        <button
          v-if="carryCapacity - carryAmount >= item.size"
          class="box"
          @click="storeItemInner(index)"
        >
          Bag
        </button>
        <div v-else class="box" />
      </template>
    </template>

    <template v-if="isMarket">
      <template v-if="box === 'market'">
        <button
          v-if="getMarketPrice(item) <= gold"
          class="box"
          @click="buyItem(index)"
        >
          Buy
        </button>
        <div v-else class="box" />
      </template>
      <div v-else-if="!shouldDisplay" class="box" />
      <button v-else class="box" @click="sellItem(index)">Sell</button>
    </template>
    <div v-else-if="!shouldDisplay" class="box" />
    <button v-else class="box" @click="dropItemInner(index)">x</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { smallest } from '../lib/utils';

export default {
  props: {
    index: { type: Number, required: true },
    item: { type: Object, required: true },
    box: { type: String, default: 'market' },
    isMarket: { type: Boolean, default: false },
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['getPlayerPrice', 'getMarketPrice', 'getName']),
    ...mapGetters('player', [
      'level',
      'carryCapacity',
      'carryAmount',
      'goldCarryCapacity',
      'hunger',
      'body',
      'bag',
      'gold',
    ]),
    ...mapGetters('market', ['currentMarket']),
    shouldDisplay() {
      if (!this.item) return false;

      if (this.isMarket && this.box === 'market') {
        if (this.getMarketPrice(this.item) >= this.gold) return false;
        else return !(this.item.type === 'food' && this.item.amount <= 0);
      } else if (
        (this.item.type === 'gold' || this.item.type === 'food') &&
        this.amount <= 0
      ) {
        return false;
      } else if (this.item.type === 'weapon' && this.item.name === 'fist')
        return false;
      else if (
        (this.item.type === 'gold' || this.item.type === 'rock') &&
        this.isMarket
      )
        return false;
      else if (this.item.type === 'ring' || this.item.name === 'wedding band')
        return false;
      return true;
    },
    boxText() {
      return this.item.type === 'gold'
        ? Math.ceil(this.item.amount / 100)
        : this.item.type === 'food'
        ? Math.ceil(this.item.amount / 20)
        : this.item.size || '';
    },
  },
  methods: {
    ...mapActions('player', [
      'pickUpItem',
      'storeItem',
      'removeItem',
      'pullItem',
      'dropItem',
      'armItem',
    ]),
    ...mapActions('market', ['buyFromMarket', 'sellToMarket']),
    sellItem(index) {
      const vm = this;
      const removeOrPullItem = vm.box === 'body' ? vm.removeItem : vm.pullItem;

      removeOrPullItem({ index, amount: 1 })
        .then(vm.dropItem)
        .then(item => vm.sellToMarket({ item })) // item player is selling
        .then(item => vm.pickUpItem({ item })) // item (gold) market is paying
        .then(vm.storeItem);
    },
    buyItem(index) {
      const vm = this;
      let gold = this.getMarketPrice(this.item);

      this.pullItem({ index: 0, amount: gold })
        .then(vm.dropItem)
        .then(() => vm.sell({ gold, index }))
        .then(vm.pickUpItem)
        .then(vm.storeItem);
    },
    armItemInner({ index, label }) {
      const vm = this;
      let foodInHand = this.bag[index].amount;
      const amount = label === 'Eat' ? smallest(vm.hunger, foodInHand) : 1;
      this.pullItem({ index, amount }).then(vm.armItem);
    },
    storeItemInner(index) {
      const vm = this;
      this.removeItem({ index }).then(vm.storeItem);
    },
    dropItemInner(index) {
      const vm = this;
      const removeOrPullItem = vm.box === 'body' ? vm.removeItem : vm.pullItem;
      removeOrPullItem({ index, amount: 1 }).then(vm.dropItem);
    },
  },
};
</script>

<style lang="scss">
.modal-content-row {
  display: grid;
  grid-template-columns: auto auto 35px 35px 35px;

  .box {
    background-color: #444;
    color: #fff;
    padding: 5px;
    font-size: 100%;
  }
  .center {
    text-align: center;
  }
}
</style>
