import { biggest, smallest } from '../lib/utils';
import { WEAPON_LIST } from '../lib/constants';

// import { rarityTolerance } from './app';

let timerVar;

const state = () => ({
  type: 'player',
  name: 'Devin',
  level: 0, // current dungeon level location :town
  locale: [2, 8], // row/column coordinates
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
  flash: false, // flashes true if being attacked - for animation
  alerts: [], //['+5 Food', '+20 Gold',
});

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
  flash: state => state.flash,
  alerts: state => state.alerts,
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
  },
  changeLevel: ({ state, commit }, toLevel) => {
    commit('setLevel', toLevel);
    commit('world/setLevel', toLevel, { root: true });
    commit('monsters/setLevel', toLevel, { root: true });
    commit('market/setLevel', toLevel, { root: true });
    commit('setMovesRemain', maxMoves(state) + 2);
  },
  gainExperience: ({ state, commit }, exp) => {
    commit('setExperience', state.experience + exp);
  },
  addPlayerAlert: ({ state, commit }, alert) => {
    const newAlerts = [alert, ...state.alerts];
    commit('setAlerts', newAlerts);
    commit('setFlash', true);
  },
  clearPlayerAlerts: ({ state, dispatch }) => {
    clearTimeout(timerVar);
    timerVar = setInterval(() => {
      dispatch('playerFlashOver');
      state.alerts.length === 0 ? clearTimeout(timerVar) : null;
    }, biggest(900 - state.alerts.length * 100, 200));
  },
  pickUpItem: ({ commit, dispatch }, { item, id }) => {
    // Take item from monster
    dispatch('monsters/takeItemFromMonster', { item, id });
    // And put in player's hand or mouth
    commit('setHand', [item]);
  },
  storeItem: ({ state, commit }, index) => {
    const currentItem = state.hand[index];
    let newBag = [];
    if (currentItem.type === 'food' || currentItem.type === 'gold') {
      //console.log("adding "+currentItem.type+" to bag")
      newBag = [...state.bag].map(item =>
        item.type === currentItem.type
          ? {
              ...item,
              amount: Math.round((item.amount + currentItem.amount) * 10) / 10,
            }
          : item
      );
    } else {
      newBag = [...state.bag];
      newBag.push(currentItem);
    }
    let newHand = [...state.hand];
    newHand.splice(index, 1);
    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  armItem: ({ state, commit }, i) => {
    const currentItem = state.hand[i];
    let newHand = [...state.hand];
    newHand.splice(i, 1);
    if (currentItem.type === 'food') {
      commit('setHealth', state.health + currentItem.amount);
      commit('setHand', newHand);
      return;
    }

    let newBody = [...state.body];
    let index = newBody.findIndex(i => i.type === currentItem.type);

    newBody.splice(index, index + 1 === 0 ? 0 : 1, currentItem);
    newBody.sort((a, b) => a.sort - b.sort);

    commit('setBody', newBody);
    commit('setHand', newHand);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  removeItem: ({ state, commit }, i) => {
    const currentItem = state.body[i];
    let newHand = [...state.hand];
    newHand.push(currentItem);
    const newBody = [...state.body];
    if (currentItem.type === 'weapon') newBody.splice(i, 1, WEAPON_LIST[0]);
    else newBody.splice(i, 1);

    commit('setBody', newBody);
    commit('settHand', newHand);
  },
  pullItem: ({ state, commit }, { i, amount }) => {
    const handItem = { ...state.bag[i] };
    if (handItem.amount) {
      handItem.amount = amount;
    }
    let newHand = [...state.hand];
    newHand.push(handItem);

    let newBag;
    if (handItem.type === 'food' || handItem.type === 'gold')
      // if food/gold reduce amount of item
      newBag = state.bag.map(item =>
        item.type === handItem.type
          ? { ...item, amount: item.amount - amount }
          : item
      );
    else {
      // else remove item
      newBag = [...state.bag];
      newBag.splice(i, 1);
    }
    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  dropItem: ({ state, commit }, i) => {
    let newHand = [...state.hand];
    newHand.splice(i, 1);
    commit('setHand', newHand);
  },
  pickUpItems: ({ getters, dispatch }, target) => {
    const monsters = getters.currentMonsters;
    //console.log("pick up items at "+target);
    // find all monsters on square
    const monstIDs = [];
    monsters.forEach((m, i) => {
      if (m.locale[0] == target[0] && m.locale[1] == target[1])
        monstIDs.push(i);
    });
    // pick up items (food, gold, weapons, gear)
    monstIDs.forEach(id => {
      let food = monsters[id].food;
      let gold = monsters[id].gold;
      let weapon = monsters[id].weapon;
      let armor = monsters[id].armor;
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
            id,
          });
          dispatch('armItem', 0);
          foodInHand -= smallest(foodInHand, belly);
        }
        if (foodInHand > 0) {
          // put what you can in bag
          //console.log("storing "+foodInHand+" food in bag")
          dispatch('pickUpItem', {
            item: { type: 'food', amount: foodInHand },
            id,
          });
          dispatch('storeItem', 0);
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
            id,
          });
          dispatch('storeItem', 0);
        }
      }
      // auto pick up weapon
      if (weapon.rarity >= getters.rarityTolerance && weapon.name != 'fist') {
        if (getters.body.filter(i => i.type === 'weapon')[0].name === 'fist') {
          // console.log("pick up and arm "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', { item: weapon, id });
          dispatch('armItem', 0);
        } else if (getters.carryCapacity - getters.carryAmount >= weapon.size) {
          // console.log("pick up and store "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', { item: weapon, id });
          dispatch('storeItem', 0);
        }
      }
      // auto pick up armor
      if (armor.rarity >= getters.rarityTolerance) {
        if (getters.body.find(i => i.type == [armor.type]) === undefined) {
          // console.log(`pick up and arm ${armor.material} ${armor.name}`);
          dispatch('addPlayerAlert', `+ new ${armor.material} armor`);
          dispatch('pickUpItem', { item: armor, id });
          dispatch('armItem', 0);
        } else if (getters.carryCapacity - getters.carryAmount >= armor.size) {
          // console.log("pick up and store "+ armor.material+" "+armor.name);
          dispatch('addPlayerAlert', `+ new ${armor.material} armor`);
          dispatch('pickUpItem', { item: armor, id });
          dispatch('storeItem', 0);
        }
      }
    });
  },
  resetMoves: ({ state, commit }) => {
    commit('setMovesRemain', maxMoves(state));
    commit('setAttacksRemain', maxAttacks(state));
  },
  playerFlashOver: ({ state, commit }) => {
    const newAlerts = [...state.alerts];
    newAlerts.pop();
    commit('setFlash', newAlerts.length === 0 ? false : true);
    commit('setAlerts', newAlerts);
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
    if (target[0] == state.locale[0] && target[1] == state.locale[1])
      return true;
    else return false;
  };
}
