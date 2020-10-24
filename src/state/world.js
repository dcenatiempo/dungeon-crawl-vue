import { TOWN_EVERY, SHADOW_LIST } from '../lib/constants';
import { getRand } from '../lib/utils';

const state = () => ({
  world: [createTownLevel(0)],
  playerLevel: 0,
});

const getters = {
  world: state => state.world,
  currentWorld: state => state.world[state.playerLevel] || [],
  isTownLevel: state => state.playerLevel % TOWN_EVERY === 0,
  levels: state => state.world.length,
  // take params
  isInBounds,
  getLevel,
};

const mutations = {
  setWorld(state, world) {
    state.world = world;
  },
  setLevel(state, val) {
    state.playerLevel = val;
  },
  updateDungeonLevel(state, { level, newLevel }) {
    state.world[level] = newLevel;
  },
};

const actions = {
  restart({ commit }) {
    commit('setWorld', [createTownLevel(0)]);
    commit('setLevel', 0);
  },
  addNewLevel({ state, commit }, toLevel) {
    const level = state.playerLevel;
    let newWorld = JSON.parse(JSON.stringify(state.world));

    if (level % TOWN_EVERY > 0) newWorld.push(createDungeonLevel(toLevel));
    else newWorld.push(createTownLevel(toLevel));

    commit('setWorld', newWorld);
  },
  updateVisibility({ state, getters, commit }, target) {
    const level = state.playerLevel;
    if (level % TOWN_EVERY <= 0) return;

    let shadowSize = 5; //1-5

    let dungeon = JSON.parse(JSON.stringify(state.world[level]));

    let coords;

    const shadows = SHADOW_LIST;

    // takes relative coordinates and converts to absolute coordinates then changes to visible
    function makeFog({ relativeRow, relativeCol }, q) {
      //find matching shaddows
      for (let i = 0; i < shadows.length; i++) {
        if (
          shadows[i].start.row === relativeRow &&
          shadows[i].start.col === relativeCol
        ) {
          for (let j = 0; j < shadows[i].full.length; j++) {
            let rShadAbs, cShadAbs;
            const shadow = shadows[i].full[j];
            if (q === 1) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            } else if (q === 2) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 3) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 4) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 5) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 6) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 7) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 8) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            }
            if (getters.isInBounds({ row: rShadAbs, col: cShadAbs })) {
              dungeon[rShadAbs][cShadAbs].fog += 1;
            }
          }
          for (let j = 0; j < shadows[i].half.length; j++) {
            let rShadAbs, cShadAbs;
            const shadow = shadows[i].half[j];
            if (q === 1) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            } else if (q === 2) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 3) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 4) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 5) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 6) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 7) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 8) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            }
            if (getters.isInBounds({ row: rShadAbs, col: cShadAbs })) {
              dungeon[rShadAbs][cShadAbs].fog += 0.5;
            }
          }
        }
      }
    }

    function writeToMap() {
      let rRel = coords.row;
      let cRel = coords.col;
      let rAbs = rRel + target.row;
      let cAbs = cRel + target.col;
      if (getters.isInBounds({ row: rAbs, col: cAbs })) {
        if (dungeon[rAbs][cAbs].type === 'wall') {
          // mark shadows
          if (
            rRel >= 0 &&
            rRel <= 3 &&
            cRel >= 1 &&
            cRel <= 4 &&
            Math.abs(cRel) >= Math.abs(rRel)
          ) {
            makeFog({ relativeRow: rRel, relativeCol: cRel }, 1); //  r, c
          } else if (
            rRel >= 1 &&
            rRel <= 4 &&
            cRel <= 0 &&
            cRel >= -3 &&
            Math.abs(cRel) <= Math.abs(rRel)
          ) {
            makeFog({ relativeRow: -cRel, relativeCol: rRel }, 2); //  c,-r
          } else if (
            rRel <= 0 &&
            rRel >= -3 &&
            cRel <= -1 &&
            cRel >= -4 &&
            Math.abs(cRel) >= Math.abs(rRel)
          ) {
            makeFog({ relativeRow: -rRel, relativeCol: -cRel }, 3); // -r,-c
          } else if (
            rRel <= -1 &&
            rRel >= -4 &&
            cRel >= 0 &&
            cRel <= 3 &&
            Math.abs(cRel) <= Math.abs(rRel)
          ) {
            makeFog({ relativeRow: cRel, relativeCol: -rRel }, 4); // -c, r
          } else if (
            rRel >= 2 &&
            rRel <= 4 &&
            cRel >= 1 &&
            cRel <= 3 &&
            Math.abs(cRel) < Math.abs(rRel)
          ) {
            makeFog({ relativeRow: cRel, relativeCol: rRel }, 5); //  c, r
          } else if (
            rRel >= 1 &&
            rRel <= 3 &&
            cRel <= -2 &&
            cRel >= -4 &&
            Math.abs(cRel) > Math.abs(rRel)
          ) {
            makeFog({ relativeRow: rRel, relativeCol: -cRel }, 6); //  r,-c
          } else if (
            rRel <= 2 &&
            rRel >= -4 &&
            cRel <= -1 &&
            cRel >= -3 &&
            Math.abs(cRel) < Math.abs(rRel)
          ) {
            makeFog({ relativeRow: -cRel, relativeCol: -rRel }, 7); // -c,-r
          } else if (
            rRel <= 1 &&
            rRel >= -3 &&
            cRel >= 2 &&
            cRel <= 4 &&
            Math.abs(cRel) > Math.abs(rRel)
          ) {
            makeFog({ relativeRow: -rRel, relativeCol: cRel }, 8); // -r, c
          }
        }
        if (dungeon[rAbs][cAbs].fog < 2) {
          dungeon[rAbs][cAbs].vis = true;
          dungeon[rAbs][cAbs].fog = 0;
        }
      }
    }

    // reset fog
    for (let i = -(shadowSize + 1); i <= shadowSize + 1; i++) {
      for (let j = -(shadowSize + 1); j <= shadowSize + 1; j++) {
        const row = target.row + i;
        const col = target.col + j;
        if (getters.isInBounds({ row, col })) {
          dungeon[row][col].fog = 1;
        }
      }
    }

    // loops once per shadow radius, starting with inner-most radius, ending with outer-most radius
    for (let i = 1; i <= shadowSize; i++) {
      coords = { row: -i, col: -i };
      for (let j = 0; j < i * 2; j++) {
        // top side
        coords.col++;
        if (
          Math.abs(coords.row) + Math.abs(coords.col) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // right side
        coords.row++;
        if (
          Math.abs(coords.row) + Math.abs(coords.col) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // bottom side
        coords.col--;
        if (
          Math.abs(coords.row) + Math.abs(coords.col) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // left side
        coords.row--;
        if (
          Math.abs(coords.row) + Math.abs(coords.col) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
    }
    dungeon[target.row][target.col].vis = true; // make players location (0,0) visible
    dungeon[target.row][target.col].fog = 0; // make players location (0,0) un-foggy

    commit('updateDungeonLevel', { level, newLevel: dungeon });
  },
};

export default { state, getters, mutations, actions, namespaced: true };

/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function createTownLevel(level) {
  let rows = 11;
  let cols = 11;
  let newLevel = [];

  for (let r = 0; r < rows; r++) {
    newLevel.push([]);
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        newLevel[r].push({ type: 'wall', vis: true, fog: 0 });
      } else newLevel[r].push({ type: 'floor', vis: true, fog: 0 });
    }
  }
  // create market
  newLevel[2][2].type = 'market';
  // create gete to next level
  newLevel[8][2].type = 'gate';
  newLevel[8][2].toLevel = level + 1;
  // create gate to previous level
  if (level > 1) {
    newLevel[2][8].type = 'gate';
    newLevel[2][8].toLevel = level - 1;
  }
  return newLevel;
}

function createDungeonLevel(toLevel) {
  let rows = 50;
  let cols = 50;
  let newLevel = [];
  let minRoomSize = 4;
  let maxRoomSize = 15;
  let maxRooms = 20;
  let numRooms = 0;
  let exits = 0;

  function placeExit(r, c) {
    const row = r > rows - 2 ? rows - 2 : r;
    const col = c > cols - 2 ? cols - 2 : c;
    const newToLevel = exits === 0 ? toLevel - 1 : toLevel + 1;
    newLevel[row][col].type = 'gate';
    newLevel[row][col].toLevel = newToLevel;
    exits++;
  }

  // create blank canvas (all walls)
  for (let r = 0; r < rows; r++) {
    newLevel.push([]);
    for (let c = 0; c < cols; c++) {
      newLevel[r].push({ type: 'wall', vis: false, fog: 1 });
    }
  }
  // carve out rooms and hallways
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r > 0 && r < rows - 1 && c > 0 && c < cols - 1) {
        // create 1st room at (1,1) all other rooms random
        if (
          getRand(0, (rows * cols) / maxRooms) === 0 ||
          (r === 1 && c === 1)
        ) {
          let height = getRand(minRoomSize, maxRoomSize);
          let width = getRand(minRoomSize, maxRoomSize);
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              if (getRand(0, 10)) {
                const row = r + y > rows - 2 ? rows - 2 : r + y;
                const col = c + x > cols - 2 ? cols - 2 : c + x;
                if (newLevel[row][col].type !== 'gate') {
                  newLevel[row][col].type = 'floor';
                  if (getRand(0, 600) === 0 && exits < 2)
                    placeExit(r + y, c + x);
                }
              }
            }
          }
          numRooms++;
          // create hallway to nearest room
          if (numRooms > 0) {
            let targetX = 1;
            let targetY = 1;
            // build tunnel from topleft corner of room to target coordinates
            for (let y = r; y >= 1; y--) {
              //start diggin up, while checking left
              if (newLevel[y][c].type !== 'gate') newLevel[y][c].type = 'floor';
              for (let x = c; x >= 1; x--) {
                if (newLevel[y][x - 1].type === 'floor') {
                  targetX = x - 1;
                  targetY = y;
                  x = 1;
                  y = 1;
                }
              }
            }
            // when find room to left, carve hallway to right
            for (let x = targetX; x <= c; x++) {
              if (newLevel[targetY][x].type !== 'gate')
                newLevel[targetY][x].type = 'floor';
            }
          }
        }
      }
    }
  }
  // ensure all exits were placed
  if (exits < 2) {
    for (let r = rows - 1; r > 1; r -= 10) {
      for (let c = cols - 1; c > 1; c -= 10) {
        if (exits >= 2) break;
        if (newLevel[r][c].type === 'floor') placeExit(r, c);
      }
    }
  }
  return newLevel;
}

/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/

// given location target (row,col) returns true if cell is within map bounds false if not
function isInBounds(state) {
  return target => {
    const currentWorld = getters.currentWorld(state);
    const rows = currentWorld.length;
    const cols = currentWorld[0].length;
    return (
      target.row >= 0 &&
      target.col >= 0 &&
      target.row < rows &&
      target.col < cols
    );
  };
}

function getLevel(state) {
  return level => state.world?.[level];
}
