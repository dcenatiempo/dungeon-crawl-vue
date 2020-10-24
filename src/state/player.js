import { biggest, smallest } from '../lib/utils';
import { WEAPON_LIST } from '../lib/constants';

// import { rarityTolerance } from './app';

let timerVar;

const defaultState = {
  type: 'player',
  name: 'Devin',
  level: 0, // current dungeon level location :town
  locale: { col: 8, row: 2 }, // row/column coordinates
  strength: 5, // Attack, Health
  speed: 5, // MaxMoves, Dodge, MaxAttacks
  tenacity: 5, // Health, MaxMoves
  intel: 5, // Dodge, Attack
  experience: 0, // used to calculate player level
  movesRemain: 2, // MaxMoves minus moves already taken
  attacksRemain: 2, // MaxAttacks minus attacks already taken
  health: 20, // MaxHealth minus damage taken
  body: [
    {
      type: 'ring',
      name: 'wedding band',
      speed: 0,
      strength: 0,
      intel: 0,
      tenacity: 0,
      defense: 0,
      sort: 6,
    },
    // WEAPON_LIST[0]
    {
      type: 'weapon',
      name: 'fist',
      size: 0,
      attack: 0,
      defense: 0,
      rarity: 1,
      speed: 7,
      sort: 1,
    },
  ],
  bag: [
    {
      type: 'gold',
      amount: 10,
    },
    {
      // array of item objects
      type: 'food',
      amount: 5,
    },
    {
      type: 'rock',
      size: 5,
    },
  ],
  hand: [], // temp storing place when moving items
  flash: 0, // flashes true if being attacked - for animation
  alerts: [], //['+5 Food', '+20 Gold',
};

const state = () => ({ ...defaultState });

const getters = {
  type: state => state.type,
  name: state => state.name,
  level: state => state.level,
  locale: state => state.locale,
  strength: state => state.strength,
  speed: state => state.speed,
  tenacity: state => state.tenacity,
  intel: state => state.intel,
  experience: state => state.experience,
  movesRemain: state => state.movesRemain,
  attacksRemain: state => state.attacksRemain,
  health: state => state.health,
  body: state => state.body,
  bag: state => state.bag,
  hand: state => state.hand,
  flash: state => state.flash % 2 === 1, // flashes on odds
  alerts: state => state.alerts,
  gold: state => state.bag.find(item => item.type === 'gold')?.amount,
  food: state => state.bag.find(item => item.type === 'food')?.amount,
  expLevel,
  maxHealth,
  hunger,
  maxAttacks,
  attackPoints,
  defense,
  dodge,
  carryCapacity,
  carryAmount,
  totalFoodCapacity,
  goldCarryCapacity,
  foodCarryCapacity,
  // take params
  isPlayer,
};

const mutations = {
  restart(state) {
    Object.assign(state, { ...defaultState });
  },
  setLocale(state, val) {
    state.locale = val;
  },
  setMovesRemain(state, val) {
    state.movesRemain = val;
  },
  setAttacksRemain(state, val) {
    state.attacksRemain = val;
  },
  setLevel(state, val) {
    state.level = val;
  },
  setExperience(state, val) {
    state.experience = val;
  },
  setAlerts(state, val) {
    state.alerts = val;
  },
  setFlash(state, val) {
    state.flash = val;
  },
  setHand(state, val) {
    state.hand = val;
  },
  setBag(state, val) {
    state.bag = val;
  },
  setBody(state, val) {
    state.body = val;
  },
  setStrength(state, val) {
    state.strength = val;
  },
  setSpeed(state, val) {
    state.speed = val;
  },
  setTenacity(state, val) {
    state.tenacity = val;
  },
  setIntel(state, val) {
    state.intel = val;
  },
  setHealth(state, val) {
    state.health = val;
  },
};

const actions = {
  // someAction: ({
  //   state,
  //   rootState,
  //   commit,
  //   dispatch,
  //   getters,
  //   rootGetters,
  // }) => {},
  restart: ({ commit }) => {
    commit('restart');
  },
  movePlayer: ({ state, commit }, target) => {
    commit('setLocale', target);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  useAttack: ({ state, commit }) => {
    commit('setAttacksRemain', state.attacksRemain - 1);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  loseHealth: ({ state, commit }, damage) => {
    commit('setHealth', state.health - damage);

    commit('setFlash', state.flash + 2);

    clearTimeout(timerVar);
    timerVar = setInterval(() => {
      state.flash <= 0 ? clearTimeout(timerVar) : null;
      commit('setFlash', state.flash - 1);
    }, 100);
  },
  changeLevel: ({ state, commit }, toLevel) => {
    commit('setLevel', toLevel);
    commit('dungeon-crawl/world/setLevel', toLevel, { root: true });
    commit('dungeon-crawl/monsters/setLevel', toLevel, { root: true });
    commit('dungeon-crawl/market/setLevel', toLevel, { root: true });
    commit('setMovesRemain', maxMoves(state) + 2);
  },
  gainExperience: ({ state, commit }, exp) => {
    commit('setExperience', state.experience + exp);
  },
  addPlayerAlert: ({ state, commit, dispatch }, alert) => {
    const newAlerts = [alert, ...state.alerts];
    commit('setAlerts', newAlerts);
    dispatch('clearPlayerAlerts');
  },
  clearPlayerAlerts: ({ state, commit }) => {
    if (!state.alerts?.length) return;
    clearTimeout(timerVar);
    timerVar = setInterval(() => {
      console.log(state.alerts);
      const newAlerts = [...state.alerts];
      newAlerts.pop();
      commit('setAlerts', newAlerts);
      newAlerts.length === 0 ? clearTimeout(timerVar) : null;
    }, biggest(900 - state.alerts.length * 100, 200));
  },
  // put item in hand
  pickUpItem: ({ state, commit, dispatch }, { item, index }) => {
    // Take item from monster
    dispatch(
      'dungeon-crawl/monsters/takeItemFromMonster',
      { item, index },
      { root: true }
    );
    // And put in player's hand or mouth

    const newHand = [...state.hand, item];
    commit('setHand', newHand);
  },
  // put item from hand in bag
  storeItem: ({ state, getters, commit }) => {
    let newBag = [];
    let newHand = [...state.hand];
    const item = newHand.shift();

    if (item.type === 'food' || item.type === 'gold') {
      //console.log("adding "+item.type+" to bag")
      let capacity =
        item.type === 'food'
          ? getters.foodCarryCapacity
          : getters.goldCarryCapacity;

      let amount = Math.round(smallest(item.amount, capacity) * 100) / 100;
      console.log(amount);
      newBag = state.bag.map(bagItem =>
        bagItem.type === item.type
          ? {
              ...bagItem,
              amount: Math.round((bagItem.amount + amount) * 10) / 10,
            }
          : bagItem
      );
    } else {
      newBag = [...state.bag, item];
    }

    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  // put item from hand to body
  armItem: ({ state, commit }) => {
    const newHand = [...state.hand];
    const item = newHand.shift();

    if (item.type === 'food') {
      commit('setHealth', state.health + item.amount);
      commit('setHand', newHand);
      return;
    }

    let newBody = [...state.body];
    let index = newBody.findIndex(i => i.type === item.type);

    newBody.splice(index, index + 1 === 0 ? 0 : 1, item);
    newBody.sort((a, b) => a.sort - b.sort);

    commit('setBody', newBody);
    commit('setHand', newHand);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  // move item from body to hand
  removeItem: ({ state, commit }, { index }) => {
    const item = state.body[index];
    const newHand = [...state.hand, item];
    const newBody = [...state.body];

    if (item.type === 'weapon') newBody.splice(index, 1, WEAPON_LIST[0]);
    else newBody.splice(index, 1);

    commit('setBody', newBody);
    commit('setHand', newHand);
  },
  // move item from bag to hand
  pullItem: ({ state, commit }, { index, amount }) => {
    const item = { ...state.bag[index] };
    if (item.amount) {
      item.amount = amount;
    }

    const newHand = [...state.hand, item];

    let newBag;
    if (item.type === 'food' || item.type === 'gold')
      // if food/gold reduce amount of item
      newBag = state.bag.map(bagItem =>
        bagItem.type === item.type
          ? { ...bagItem, amount: bagItem.amount - amount }
          : bagItem
      );
    else {
      // else remove item
      newBag = [...state.bag];
      newBag.splice(index, 1);
    }
    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  // remove item from hand
  dropItem: ({ state, commit }) => {
    let newHand = [...state.hand];
    const item = newHand.shift();
    commit('setHand', newHand);
    return item;
  },
  pickUpItems: ({ getters, rootGetters, dispatch }, target) => {
    const monsters = rootGetters['dungeon-crawl/monsters/currentMonsters'];
    //console.log("pick up items at "+target);
    // find all monsters on square
    const monstIDs = [];
    monsters.forEach((m, i) => {
      if (m.locale.col == target.col && m.locale.row == target.row)
        monstIDs.push(i);
    });
    // pick up items (food, gold, weapons, gear)
    monstIDs.forEach(index => {
      let food = monsters[index].food;
      let gold = monsters[index].gold;
      let weapon = monsters[index].weapon;
      let armor = monsters[index].armor;
      // auto pick up food
      if (food > 0) {
        let belly = getters.hunger;
        let doggyBag = getters.foodCarryCapacity;
        let foodInHand = smallest(food, belly + doggyBag);
        dispatch('addPlayerAlert', `+${foodInHand} food`);
        if (belly > 0) {
          // eat what food you can
          //console.log("eating "+smallest(foodInHand, belly)+" food")
          dispatch('pickUpItem', {
            item: { type: 'food', amount: smallest(foodInHand, belly) },
            index,
          });
          dispatch('armItem');
          foodInHand -= smallest(foodInHand, belly);
        }
        if (foodInHand > 0) {
          // put what you can in bag
          //console.log("storing "+foodInHand+" food in bag")
          dispatch('pickUpItem', {
            item: { type: 'food', amount: foodInHand },
            index,
          });
          dispatch('storeItem');
        }
      }
      // auto pick up gold
      if (gold > 0) {
        let purse = goldCarryCapacity;
        let goldInHand = smallest(gold, purse);
        if (goldInHand > 0) {
          //console.log("picking up "+goldInHand+" gold");
          dispatch('addPlayerAlert', `+${goldInHand} gold`);
          dispatch('pickUpItem', {
            item: { type: 'gold', amount: goldInHand },
            index,
          });
          dispatch('storeItem');
        }
      }
      // auto pick up weapon
      if (
        weapon.rarity >= rootGetters['dungeon-crawl/app/rarityTolerance'] &&
        weapon.name != 'fist'
      ) {
        if (getters.body.filter(i => i.type === 'weapon')[0].name === 'fist') {
          // console.log("pick up and arm "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', { item: weapon, index });
          dispatch('armItem');
        } else if (getters.carryCapacity - getters.carryAmount >= weapon.size) {
          // console.log("pick up and store "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', { item: weapon, index });
          dispatch('storeItem');
        }
      }
      // auto pick up armor
      if (armor.rarity >= rootGetters['dungeon-crawl/app/rarityTolerance']) {
        if (getters.body.find(i => i.type == [armor.type]) === undefined) {
          // console.log(`pick up and arm ${armor.material} ${armor.name}`);
          dispatch('addPlayerAlert', `+ new ${armor.material} armor`);
          dispatch('pickUpItem', { item: armor, index });
          dispatch('armItem');
        } else if (getters.carryCapacity - getters.carryAmount >= armor.size) {
          // console.log("pick up and store "+ armor.material+" "+armor.name);
          dispatch('addPlayerAlert', `+ new ${armor.material} armor`);
          dispatch('pickUpItem', { item: armor, index });
          dispatch('storeItem');
        }
      }
    });
  },
  resetMoves: ({ state, commit }) => {
    commit('setMovesRemain', maxMoves(state));
    commit('setAttacksRemain', maxAttacks(state));
  },
};

export default { state, getters, mutations, actions, namespaced: true };

/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/

function expLevel(state) {
  return Math.floor((-1 + Math.sqrt(1 + (8 * state.experience) / 50)) / 2) + 1;
}

function maxHealth(state) {
  return (state.strength + state.tenacity) * (expLevel(state) + 1);
}

function hunger(state) {
  return maxHealth(state) - state.health;
}

function attackPoints(state) {
  const weaponAttack = state.body.filter(i => i.type === 'weapon')[0].attack;
  return Math.round(
    (state.strength + state.intel) *
      ((weaponAttack + 10) / 10) *
      ((expLevel(state) + 1) / 4)
  );
}

function defense(state) {
  const gearDefense = state.body.reduce((sum, i) => {
    return sum + i.defense;
  }, 0);
  return (state.tenacity + state.strength + gearDefense) / 100;
}

function dodge(state) {
  return state.speed * state.intel;
}

function maxMoves(state) {
  return Math.ceil((state.speed + state.tenacity * 2) / 4);
}

function maxAttacks(state) {
  const weaponSpeed = state.body.filter(i => i.type === 'weapon')[0].speed;
  return smallest(Math.ceil((state.speed + weaponSpeed) / 5), maxMoves(state));
}

function carryCapacity(state) {
  return 10 + state.strength * 2;
}

function carryAmount(state) {
  // loop through bag items
  const bagItems = state.bag.reduce((sum, item) => {
    if (item.type === 'food') return sum + Math.ceil(item.amount / 32);
    // 32 food takes 1 spot
    else if (item.type === 'gold') return sum + Math.ceil(item.amount / 100);
    // 100 gold takes 1 spot
    else return sum + item.size; // other bag items take up 1 spot/size
  }, 0);
  return bagItems;
}

// belly + bag capacity
function totalFoodCapacity(state) {
  return (
    maxHealth(state) -
    state.health +
    (carryCapacity(state) - carryAmount(state) * 10)
  );
}

function goldCarryCapacity(state) {
  return (carryCapacity(state) - carryAmount(state)) * 50;
}

// bag food capacity
function foodCarryCapacity(state) {
  return (carryCapacity(state) - carryAmount(state)) * 10;
}

// given location target (row,col) returns true if player is on that location, false if not
function isPlayer(state) {
  return target => {
    if (target.col == state.locale.col && target.row == state.locale.row)
      return true;
    else return false;
  };
}
