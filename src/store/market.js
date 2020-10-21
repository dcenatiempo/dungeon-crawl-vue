import { randomGold, getArmor, getWeapon } from '../lib/utils';
import { TOWN_EVERY } from '../lib/constants';

const state = () => ({
  market: createMarket(0),
  playerLevel: 0,
});

const getters = {
  market: state => state.market,
  currentMarket: state => state.market[state.playerLevel / TOWN_EVERY],
};

const mutations = {
  setMarket(state, val) {
    state.market = val;
  },
  setLevel(state, val) {
    state.playerLevel = val;
  },
};

const actions = {
  restart({ commit }) {
    commit('setMarket', createMarket(0));
    commit('setLevel', 0);
  },
  populateMarket({ state, commit }, level) {
    const newMarket = JSON.parse(JSON.stringify(state.market));

    newMarket.push(createMarket(level)[0]);

    commit('setMarket', newMarket);
  },
  sellToMarket({ state, rootGetters, commit }, { item }) {
    const newMarket = JSON.parse(JSON.stringify(state.market));
    const marketId = state.playerLevel / TOWN_EVERY;
    const gold = rootGetters.getPlayerPrice(item);

    if (item.type === 'food') newMarket[marketId].bag[0].amount += 1;
    else newMarket[marketId].bag.push(item);

    newMarket[marketId].gold -= gold;

    commit('setMarket', newMarket);
    debugger;
    return { type: 'gold', amount: gold };
  },
  buyFromMarket({ state, commit }, { gold, index }) {
    const newMarket = JSON.parse(JSON.stringify(state.market));
    const marketId = state.playerLevel / TOWN_EVERY;
    let item = { ...newMarket[marketId].bag[index] };
    if (item.type === 'food') {
      newMarket[marketId].bag[index].amount -= 1;
      item.amount = 1;
    } else {
      newMarket[marketId].bag.splice(index, 1);
    }

    newMarket[marketId].gold += gold;

    commit('setMarket', newMarket);

    return item;
  },
};

export default { state, getters, mutations, actions, namespaced: true };

/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

// returns array of 1 gold object, 1 food object, 0-12 gear objects
function createMarket(level) {
  let market = [];
  level += 3;
  market.push({ gold: randomGold(50 * level), bag: [] });
  market[0].bag.push({ type: 'food', amount: randomGold(10 * level) });
  for (let i = 0; i < 1 + randomGold(3); i++) {
    let weapon = getWeapon(true, level);
    weapon.name === 'fist' ? null : market[0].bag.push(weapon);
  }
  for (let i = 0; i < 1 + randomGold(3); i++) {
    let armor = getArmor(true, level);
    market[0].bag.push(armor);
  }
  return market;
}
