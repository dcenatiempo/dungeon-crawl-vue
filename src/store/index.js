import Vue from 'vue';
import Vuex from 'vuex';

import app from './app.js';
import player from './player.js';
import world from './world.js';
import market from './market.js';
import monsters from './monsters.js';

import { getRand, smallest, biggest, sleep } from '../lib/utils';
// import { WEAPON_LIST, MATERIAL_LIST, GEAR_LIST } from '../lib/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    player,
    world,
    market,
    monsters,
  },
  getters: {
    getName,
    getExpLevel,
    getAttackPoints,
    getDefense,
    getDodge,
    getCarryAmount,
    getMarketPrice,
    getPlayerPrice,
    getPrice,
    getMaxMoves,
    getMaxAttacks,
    getMaxHealth,
    getExpFromMonst,
  },
  actions: {
    battle,
    restart,
  },
});

/*******************************************************************************
 *
 * GETTTERS
 *
 *******************************************************************************/

function getName(/* state */) {
  return item => {
    if (item.type === 'weapon' || item.type === 'ring')
      // weapon
      return item.name;
    else if (item.type === 'gold') return '$' + item.amount;
    else if (item.type === 'food') return item.amount + ' oz meat';
    else if (!item.name)
      // gold/food/rock
      return item.type;
    // armor
    else return item.material + ' ' + item.name;
  };
}

// returns char level
function getExpLevel(state) {
  return char => {
    if (char.type === 'player') {
      return player.getters.expLevel;
    }
    return state.player.level + 1;
  };
}

// returns attack points of character
function getAttackPoints(state) {
  return char => {
    if (char.type === 'player') {
      return player.getters.attackPoints;
    }
    return Math.round(
      (char.strength + char.intel) *
        ((char.weapon.attack + 10) / 10) *
        ((getExpLevel(state)(char) + 1) / 4)
    );
  };
}

function getDefense(/* state */) {
  return char => {
    if (char.type === 'player') {
      return player.getters.defense;
    }
    return (
      (char.tenacity +
        char.strength +
        char.weapon.defense +
        char.armor.defense) /
      100
    );
  };
}

function getDodge(/* state */) {
  return char => {
    if (char.type === 'player') {
      return player.getters.dodge;
    }
    // speed, intel //TODO: account for ring of agility
    return char.speed * char.intel;
  };
}

function getCarryAmount(/* state */) {
  return char => {
    const bagItems = char.bag.reduce((sum, item) => {
      // loop through bag items
      if (item.type === 'food') return sum + Math.ceil(item.amount / 32);
      // 32 food takes 1 spot
      else if (item.type === 'gold') return sum + Math.ceil(item.amount / 100);
      // 100 gold takes 1 spot
      else return sum + item.size;
    }, 0); // other bag items take up 1 spot/size
    return bagItems;
  };
}

function getMarketPrice(state) {
  return item => {
    return getPrice(state)({ item, dif: 1.25 });
  };
}

function getPlayerPrice(state) {
  return item => {
    return getPrice(state)({ item, dif: 0.75 });
  };
}

function getPrice(state) {
  return ({ item, dif }) => {
    let price;
    let rarity;
    if (item.type === 'food') {
      let pFood = state.player.bag.filter(thing => thing.type === 'food')[0]
        .amount;
      let mFood = item.amount;
      rarity = biggest(1, 8 - Math.round((pFood + mFood) / 25));
      price = rarity / 10;
      return Math.round(price * dif * 10) / 10;
    } else {
      price = item.rarity * 20;
      price = price * dif;
      if (dif > 0)
        price = Math.round(price * (1 - (state.player.intel - 1) * 0.05));
      return Math.round(price * 10) / 10;
    }
  };
}

// given char returns max moves
function getMaxMoves(/* state */) {
  return char => {
    if (char.type === 'player') {
      return player.getters.maxMoves;
    }
    // speed, tenacity
    return Math.round((char.speed + char.tenacity * 2) / 4);
  };
}

// given char returns max moves
function getMaxAttacks(/* state */) {
  return char => {
    if (char.type === 'player') {
      return player.getters.maxAttacks;
    }
    return smallest(
      Math.ceil((char.speed + char.weapon.speed) / 5),
      getMaxMoves(char)
    );
  };
}

// given char returns max health
function getMaxHealth(state) {
  return char => {
    if (char.type === 'player') {
      return player.getters.maxHealth;
    }
    //TODO: strength, tenacity, level
    return (
      30 + (char.strength + char.tenacity) * (getExpLevel(state)(char) + 1)
    );
  };
}

// given monster, returns that monsters experience points
function getExpFromMonst(state) {
  return monster => {
    return Math.round(
      ((monster.strength + monster.tenacity + monster.speed + monster.intel) *
        (getExpLevel(state)(monster) + 1)) /
        3
    );
  };
}

/*******************************************************************************
 *
 * ACTIONS
 *
 *******************************************************************************/
// returns damage from battle with monster[i].
// attacker is boolean that answers "is the monster the attacker?"
function battle({ dispatch, getters }, { index, attacker }) {
  const monster = getters['monsters/currentMonsters'][index];
  let attackPoints = attacker
    ? getters.getAttackPoints(monster)
    : getters['player/attackPoints'];
  let defense = !attacker
    ? getters.getDefense(monster)
    : getters['player/defense'];

  let dodge = !attacker ? getters.getDodge(monster) : getters['player/dodge'];

  let damage = Math.round(attackPoints * (1 - defense));

  console.log(
    attackPoints + ' attack -' + defense + '% defense = ' + damage + ' damage'
  );

  //If defender dodges attacke, no damage is done
  if (getRand(0, 100) <= dodge) {
    damage = 0;
    //console.log("attack was dodged!")
  }
  const message = attacker
    ? !damage
      ? 'Dodge!'
      : `-${damage} health`
    : !damage
    ? 'Missed!'
    : `+${damage} attack!`;
  dispatch('player/addPlayerAlert', message, { root: true });

  if (attacker) {
    sleep(300).then(() =>
      dispatch('monsters/monsterFlashOver', index, { root: true })
    );
  }

  return damage;
}

function restart({ dispatch }) {
  dispatch('app/restart', { root: true });
  dispatch('market/restart', { root: true });
  dispatch('monsters/restart', { root: true });
  dispatch('world/restart', { root: true });
  dispatch('player/restart', { root: true });
}
