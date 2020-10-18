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
      <div v-if="!shouldDispay" class="box" />
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
            @click="e => armItemInner({ label: e.target.innerHTML, id: index })"
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
          v-if="getMarketPrice(item) <= bag[0].amount"
          class="box"
          @click="buyItem(index)"
        >
          Buy
        </button>
        <div v-else class="box" />
      </template>
      <div v-else-if="!shouldDispay" class="box" />
      <button v-else class="box" @click="sellItem(index)">Sell</button>
    </template>
    <div v-else-if="!shouldDisplay" class="box" />
    <button v-else class="box" @click="dropItemInner(index)">x</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { TOWN_EVERY } from '../lib/constants';
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
    ...mapGetters(['getPlayerPrice', 'getMarketPrice']),
    ...mapGetters('player', ['level', 'goldCarryCapacity', 'hunger']),
    ...mapGetters('market', ['currentMarket']),
    shouldDisplay() {
      if (!this.item) return false;

      if (this.isMarket && this.box === 'market') {
        if (this.getMarketPrice(this.item) >= this.bag[0].amount) return false;
        else return !(this.item.type === 'food' && this.item.amount <= 0);
      } else if (
        (this.type === 'gold' || this.type === 'food') &&
        this.amount <= 0
      )
        return false;
      else if (this.type === 'weapon' && this.name === 'fist') return false;
      else if ((this.type === 'gold' || this.type === 'rock') && this.isMarket)
        return false;
      else if (this.type === 'ring' || this.name === 'wedding band')
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
    ...mapActions('market', ['sell', 'buy']),
    sellItem(e) {
      let level = this.level;
      let marketId = level / TOWN_EVERY;
      let id = e.target.id;
      let gold = this.getPlayerPrice(this.item);
      let goldCapacity = this.goldCarryCapacity;
      let amount = Math.round(smallest(gold, goldCapacity) * 100) / 100;

      this.pickUpItem({ type: 'gold', amount }, null);
      this.storeItem(0);

      if (this.box === 'body') this.removeItem(id);
      else if (this.box === 'bag') this.pullItem(id, 1);

      this.dropItem(0);
      this.buy({ marketId, gold, item: this.item });
    },
    buyItem(id) {
      let level = this.level;
      let marketId = level / TOWN_EVERY;
      let gold = this.getMarketPrice(this.item);
      this.pullItem(0, gold);
      this.dropItem(0);
      if (id == 0) this.pickUpItem({ type: 'food', amount: 1 }, null);
      else this.pickUpItem(this.item, null);
      this.storeItem(0);
      this.sell({ marketId, gold, id });
    },
    armItemInner({ id, label }) {
      let foodInHand = this.bag[id].amount;
      this.pullItem(
        id,
        label === 'Eat' ? smallest(this.hunger, foodInHand) : 1
      );
      this.armItem(0);
    },
    storeItemInner(e) {
      let id = e.target.id;
      this.removeItem(id);
      this.storeItem(0);
    },
    dropItemInner(e) {
      // rucksack and body???
      let id = e.target.id;
      this.box === 'body' ? this.removeItem(id) : this.pullItem(id, 1); // else box === 'bag'
      this.dropItem(0);
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
