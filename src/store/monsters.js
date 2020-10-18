import { TOWN_EVERY, MONSTER_LIST, WEAPON_LIST } from '../lib/constants';
import {
  getRand,
  sleep,
  add,
  randomGold,
  getWeapon,
  getArmor,
} from '../lib/utils';

// createMonster({
//   monster: MONSTER_LIST[0][getRand(0, MONSTER_LIST[0].length - 1)],
//   coords: [8, 8],
// }),

const state = () => ({
  monsters: [[]],
  playerLevel: 0,
});

const getters = {
  monsters: state => state.monsters,
  currentMonsters: state => state.monsters[state.playerLevel] || [],
  isAnyMonster,
  isAliveMonster,
  isDeadMonster,
};

const mutations = {
  setMonsters(state, val) {
    state.monsters = val;
  },
  setLevel(state, val) {
    state.playerLevel = val;
  },
};

const actions = {
  populateLevel,
  monsterLoseHealth,
  takeItemFromMonster,
  monsterFlashOver,
  monsterTurn,
  moveMonster,
  resetMoves,
  createMonster,
};

export default { state, getters, mutations, actions, namespaced: true };

/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function createMonster({ rootGetters }, { monster, coords }) {
  let tempMonster = {
    ...monster,
    alert: [], //['-23 Health', 'Dodge!'],
    flash: false, // flashes true if being attacked - for animation
    locale: coords, // monsters location on map
    gold: randomGold(monster.gold), // Gold carrying on person
    armor: getArmor(monster.tools), // Array of armor objects on person
    weapon: getWeapon(monster.tools), // Weapon on person
    movesRemain: rootGetters.getMaxMoves(monster), // MaxMoves minus moves already taken
    health: rootGetters.getMaxHealth(monster), // MaxHealth minus damage taken
  };
  tempMonster.attacksRemain = rootGetters.getMaxAttacks(tempMonster);
  return tempMonster;
}

/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/

function isAnyMonster(state) {
  return target => {
    let mIndex = false;
    const currentMonsters = getters.currentMonsters(state);
    if (!currentMonsters?.length) return mIndex;

    currentMonsters.forEach((monster, index) => {
      if (target[0] == monster.locale[0] && target[1] == monster.locale[1]) {
        mIndex = index;
      }
    });
    return mIndex;
  };
}

function isAliveMonster(state) {
  return target => {
    let mIndex = false;
    const currentMonsters = getters.currentMonsters(state);
    if (!currentMonsters?.length) return mIndex;

    currentMonsters.forEach((monster, index) => {
      if (target[0] == monster.locale[0] && target[1] == monster.locale[1]) {
        if (monster.health > 0) {
          mIndex = index;
        }
      }
    });
    return mIndex;
  };
}

function isDeadMonster(state) {
  return target => {
    let mIndex = false;
    const currentMonsters = getters.currentMonsters(state);
    if (!currentMonsters?.length) return mIndex;

    currentMonsters.forEach((monster, index) => {
      if (target[0] == monster.locale[0] && target[1] == monster.locale[1]) {
        if (
          monster.health <= 0 &&
          (monster.food > 0 ||
            monster.gold > 0 ||
            (monster.weapon.name != 'fist' &&
              monster.armor.rarity >= getters.rarityTolerance) ||
            (monster.armor.name != 'no armor' &&
              monster.armor.rarity >= getters.rarityTolerance))
        )
          mIndex = index;
      }
    });
    return mIndex;
  };
}

/*******************************************************************************
 *
 * ACTIONS
 *
 *******************************************************************************/

async function populateLevel(
  { state, commit, dispatch, rootGetters },
  toLevel
) {
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  let monsterLevelList = [];
  let currentWorld = rootGetters['world/world'][toLevel];
  let remainder = toLevel % TOWN_EVERY;
  let rarity;
  for (let r = 1; r < currentWorld.length - 2; r++) {
    for (let c = 1; c < currentWorld.length - 2; c++) {
      if (
        currentWorld[r][c].type === 'gate' &&
        remainder == TOWN_EVERY - 1 &&
        currentWorld[r][c].toLevel === toLevel + 1
      ) {
        const newMonster = await dispatch('createMonster', {
          monster: MONSTER_LIST[3][getRand(0, MONSTER_LIST[3].length - 1)],
          coords: [r, c],
        });
        monsterLevelList.push(newMonster);
      }
      if (currentWorld[r][c].type === 'floor') {
        if (getRand(0, 50) === 0) {
          // 1 monster every 50 squares
          if (remainder === 0) rarity = 0;
          else {
            let percent = getRand(0, 100);
            if (remainder === 1) {
              if (percent <= 90) rarity = 0;
              else rarity = 1;
            }
            if (remainder === 2) {
              if (percent <= 50) rarity = 0;
              else if (percent <= 90) rarity = 1;
              else rarity = 2;
            }
            if (remainder === 3) {
              if (percent <= 30) rarity = 0;
              else if (percent <= 60) rarity = 1;
              else rarity = 2;
            }
            if (remainder === 4) {
              if (percent <= 50) rarity = 0;
              else if (percent <= 30) rarity = 1;
              else rarity = 2;
            }
          }

          const newMonster = await dispatch('createMonster', {
            monster:
              MONSTER_LIST[rarity][getRand(0, MONSTER_LIST[rarity].length - 1)],
            coords: [r, c],
          });

          monsterLevelList.push(newMonster);
        }
      }
    }
  }

  newMonsters.push(monsterLevelList);

  commit('setMonsters', newMonsters);
}

function monsterLoseHealth({ state, commit }, { id, damage }) {
  // locate monster
  const level = state.playerLevel;
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  let newMonster = newMonsters[level][id];

  // decrease monster health
  newMonster.health -= damage;
  // turn on flash
  newMonster.flash = true;

  commit('setMonsters', newMonsters);
}

function takeItemFromMonster({ state, commit }, { item, id }) {
  if (id === null) return;

  // locate monster
  const level = state.playerLevel;
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  let newMonster = newMonsters[level][id];

  // take food/gold from monster
  if (item.type === 'food' || item.type === 'gold')
    newMonster[item.type] -= item.amount;
  // take weapon from monster
  else if (item.type === 'weapon') newMonster.weapon = WEAPON_LIST[0];
  // take armor from monster
  else newMonster.armor = 'no armor';

  commit('setMonsters', newMonsters);
}

function monsterFlashOver({ state, commit }, { id }) {
  // locate monster
  const level = state.playerLevel;
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  let newMonster = newMonsters[level][id];

  // turn off flash
  newMonster.flash = false;

  commit('setMonsters', newMonsters);
}

function resetMoves({ state, commit, rootGetters }, id) {
  const level = state.playerLevel;
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  const monster = newMonsters[level][id];
  monster.movesRemain = rootGetters.getMaxMoves(monster);
  commit('setMonsters', newMonsters);
}

// for monster index i, exaust moves, then attack
async function monsterTurn({ dispatch, rootGetters }, mi) {
  const currentWorld = rootGetters['world/currentWorld'];
  const m = getters.currentMonsters[mi];
  const pL = rootGetters['player/locale'];
  let mL = m.locale;
  let moves = m.movesRemain;
  let attacks = m.attacksRemain;
  let target = [];
  function deltaL(a, b) {
    return [a[0] - b[0], a[1] - b[1]];
  }
  function isByPlayer(a, b) {
    return Math.abs(deltaL(a, b)[0]) <= 1 && Math.abs(deltaL(a, b)[1]) <= 1;
  }
  // max out monster moves
  function moveRecursive() {
    console.count('monstermove');
    if (moves <= 0) return;
    if (isByPlayer(mL, pL)) return;
    // check moves
    for (let r = -1; r < 2; r++) {
      for (let c = -1; c < 2; c++) {
        if (r === 0 && c === 0) continue;
        target.push(deltaL(add(mL, [r, c]), pL));
      }
    }
    target = target
      .sort(
        (a, b) =>
          Math.abs(a[0]) + Math.abs(a[1]) - (Math.abs(b[0]) + Math.abs(b[1]))
      )
      .slice(0, 3)
      .map(item => add(item, pL));

    // make best move
    for (let t = 0; t < 3; t++) {
      if (
        currentWorld[target[t][0]][target[t][1]].type === 'floor' &&
        !isAliveMonster(target[t]) &&
        !rootGetters['player/isPlayer'](target[t])
      ) {
        dispatch('moveMonster', { iid: mi, target: target[t] });
        mL[0] = target[t][0];
        mL[1] = target[t][1];
        t = 3;
      }
    }
    target = [];
    moves--;
    sleep(200).then(moveRecursive);
  }
  moveRecursive();

  // max out monster attacks
  while (moves > 0 && attacks > 0 && isByPlayer(mL, pL)) {
    const damage = await dispatch('battle', { index: mi, attacker: true });
    dispatch('player/loseHealth', damage);
    // timed erase of player alerts
    dispatch('player/clearPlayerAlerts');
    moves--;
    attacks--;
  }
  resetMoves(mi);
}

function moveMonster({ state, commit }, { id, target }) {
  const level = state.playerLevel;
  let newMonsters = JSON.parse(JSON.stringify(state.monsters));
  newMonsters[level][id].locale = target;
  newMonsters[level][id].movesRemain -= 1;
  commit('setMonsters', newMonsters);
}
