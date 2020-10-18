import { TOWN_EVERY, SHADOW_LIST } from '../lib/constants';
import { getRand } from '../lib/utils';

const state = () => ({
  world: [createTownLevel(0)],
  playerLevel: 0,
});

const getters = {
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
};

const actions = {
  addNewLevel({ state, commit, rootGetters }, toLevel) {
    const level = rootGetters['dungeon/player/level'];
    let newWorld = JSON.parse(JSON.stringify(state.world));

    if (level % TOWN_EVERY > 0) newWorld.push(createDungeonLevel(toLevel));
    else newWorld.push(createTownLevel(toLevel));

    commit('setWorld', newWorld);
  },
  updateVisibility({ state, commit }, target) {
    const level = state.playerLevel;
    if (level % TOWN_EVERY <= 0) return;

    let shadowSize = 5; //1-5
    let newWorld = JSON.parse(JSON.stringify(state.world));
    let dungeon = newWorld[level];
    // let rows = dungeon.length;
    // let cols = dungeon[0].length;
    let coords;

    const shadows = SHADOW_LIST;

    // takes relative coordinates and converts to absolute coordinates then changes to visible
    function makeFog(rR, cR, q) {
      //find matching shaddows
      for (let i = 0; i < shadows.length; i++) {
        if (shadows[i].start[0] === rR && shadows[i].start[1] === cR) {
          for (let j = 0; j < shadows[i].full.length; j++) {
            let rShadAbs, cShadAbs;
            if (q === 1) {
              rShadAbs = shadows[i].full[j][0] + target[0];
              cShadAbs = shadows[i].full[j][1] + target[1];
            } else if (q === 2) {
              rShadAbs = shadows[i].full[j][1] + target[0];
              cShadAbs = -shadows[i].full[j][0] + target[1];
            } else if (q === 3) {
              rShadAbs = -shadows[i].full[j][0] + target[0];
              cShadAbs = -shadows[i].full[j][1] + target[1];
            } else if (q === 4) {
              rShadAbs = -shadows[i].full[j][1] + target[0];
              cShadAbs = shadows[i].full[j][0] + target[1];
            } else if (q === 5) {
              rShadAbs = shadows[i].full[j][1] + target[0];
              cShadAbs = shadows[i].full[j][0] + target[1];
            } else if (q === 6) {
              rShadAbs = shadows[i].full[j][0] + target[0];
              cShadAbs = -shadows[i].full[j][1] + target[1];
            } else if (q === 7) {
              rShadAbs = -shadows[i].full[j][1] + target[0];
              cShadAbs = -shadows[i].full[j][0] + target[1];
            } else if (q === 8) {
              rShadAbs = -shadows[i].full[j][0] + target[0];
              cShadAbs = shadows[i].full[j][1] + target[1];
            }
            if (isInBounds([rShadAbs, cShadAbs])) {
              dungeon[rShadAbs][cShadAbs].fog += 1;
              //console.log("full fog added")
            }
          }
          for (let j = 0; j < shadows[i].half.length; j++) {
            let rShadAbs, cShadAbs;
            if (q === 1) {
              rShadAbs = shadows[i].half[j][0] + target[0];
              cShadAbs = shadows[i].half[j][1] + target[1];
            } else if (q === 2) {
              rShadAbs = shadows[i].half[j][1] + target[0];
              cShadAbs = -shadows[i].half[j][0] + target[1];
            } else if (q === 3) {
              rShadAbs = -shadows[i].half[j][0] + target[0];
              cShadAbs = -shadows[i].half[j][1] + target[1];
            } else if (q === 4) {
              rShadAbs = -shadows[i].half[j][1] + target[0];
              cShadAbs = shadows[i].half[j][0] + target[1];
            } else if (q === 5) {
              rShadAbs = shadows[i].half[j][1] + target[0];
              cShadAbs = shadows[i].half[j][0] + target[1];
            } else if (q === 6) {
              rShadAbs = shadows[i].half[j][0] + target[0];
              cShadAbs = -shadows[i].half[j][1] + target[1];
            } else if (q === 7) {
              rShadAbs = -shadows[i].half[j][1] + target[0];
              cShadAbs = -shadows[i].half[j][0] + target[1];
            } else if (q === 8) {
              rShadAbs = -shadows[i].half[j][0] + target[0];
              cShadAbs = shadows[i].half[j][1] + target[1];
            }
            if (isInBounds([rShadAbs, cShadAbs])) {
              dungeon[rShadAbs][cShadAbs].fog += 0.5;
              //console.log("half fog added")
            }
          }
        }
      }
    }

    function writeToMap() {
      let rRel = coords[0];
      let cRel = coords[1];
      let rAbs = rRel + target[0];
      let cAbs = cRel + target[1];
      if (isInBounds([rAbs, cAbs])) {
        if (dungeon[rAbs][cAbs].type === 'wall') {
          // mark shadows
          if (
            rRel >= 0 &&
            rRel <= 3 &&
            cRel >= 1 &&
            cRel <= 4 &&
            Math.abs(cRel) >= Math.abs(rRel)
          ) {
            makeFog(rRel, cRel, 1); //  r, c
          } else if (
            rRel >= 1 &&
            rRel <= 4 &&
            cRel <= 0 &&
            cRel >= -3 &&
            Math.abs(cRel) <= Math.abs(rRel)
          ) {
            makeFog(-cRel, rRel, 2); //  c,-r
          } else if (
            rRel <= 0 &&
            rRel >= -3 &&
            cRel <= -1 &&
            cRel >= -4 &&
            Math.abs(cRel) >= Math.abs(rRel)
          ) {
            makeFog(-rRel, -cRel, 3); // -r,-c
          } else if (
            rRel <= -1 &&
            rRel >= -4 &&
            cRel >= 0 &&
            cRel <= 3 &&
            Math.abs(cRel) <= Math.abs(rRel)
          ) {
            makeFog(cRel, -rRel, 4); // -c, r
          } else if (
            rRel >= 2 &&
            rRel <= 4 &&
            cRel >= 1 &&
            cRel <= 3 &&
            Math.abs(cRel) < Math.abs(rRel)
          ) {
            makeFog(cRel, rRel, 5); //  c, r
          } else if (
            rRel >= 1 &&
            rRel <= 3 &&
            cRel <= -2 &&
            cRel >= -4 &&
            Math.abs(cRel) > Math.abs(rRel)
          ) {
            makeFog(rRel, -cRel, 6); //  r,-c
          } else if (
            rRel <= 2 &&
            rRel >= -4 &&
            cRel <= -1 &&
            cRel >= -3 &&
            Math.abs(cRel) < Math.abs(rRel)
          ) {
            makeFog(-cRel, -rRel, 7); // -c,-r
          } else if (
            rRel <= 1 &&
            rRel >= -3 &&
            cRel >= 2 &&
            cRel <= 4 &&
            Math.abs(cRel) > Math.abs(rRel)
          ) {
            makeFog(-rRel, cRel, 8); // -r, c
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
        if (isInBounds([target[0] + i, target[1] + j])) {
          dungeon[target[0] + i][target[1] + j].fog = 1;
        }
      }
    }

    // loops once per shadow radius, starting with inner-most radius, ending with outer-most radius
    for (let i = 1; i <= shadowSize; i++) {
      coords = [-i, -i];
      for (let j = 0; j < i * 2; j++) {
        // top side
        coords[1]++;
        if (
          Math.abs(coords[0]) + Math.abs(coords[1]) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // right side
        coords[0]++;
        if (
          Math.abs(coords[0]) + Math.abs(coords[1]) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // bottom side
        coords[1]--;
        if (
          Math.abs(coords[0]) + Math.abs(coords[1]) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
      for (let j = 0; j < i * 2; j++) {
        // left side
        coords[0]--;
        if (
          Math.abs(coords[0]) + Math.abs(coords[1]) <=
          shadowSize * 2 - Math.floor(shadowSize / 2)
        )
          writeToMap();
      }
    }
    dungeon[target[0]][target[1]].vis = true; // make players location (0,0) visible
    dungeon[target[0]][target[1]].fog = 0; // make players location (0,0) un-foggy

    commit('setWorld', newWorld);
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
  function placeExit(y, x) {
    newLevel[y > rows - 2 ? rows - 2 : y][x > cols - 2 ? cols - 2 : x].type =
      'gate';
    newLevel[y > rows - 2 ? rows - 2 : y][x > cols - 2 ? cols - 2 : x].toLevel =
      exits === 0 ? toLevel - 1 : toLevel + 1;
    exits++;
    //console.log("exit placed at "+y+","+x)
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
              if (getRand(0, 10))
                if (
                  newLevel[r + y > rows - 2 ? rows - 2 : r + y][
                    c + x > cols - 2 ? cols - 2 : c + x
                  ].type !== 'gate'
                ) {
                  newLevel[r + y > rows - 2 ? rows - 2 : r + y][
                    c + x > cols - 2 ? cols - 2 : c + x
                  ].type = 'floor';
                  if (getRand(0, 600) === 0 && exits < 2)
                    placeExit(r + y, c + x);
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
    // debugger; // eslint-disable-line
    const currentWorld = getters.currentWorld(state);
    const rows = currentWorld.length;
    const cols = currentWorld[0].length;
    if (
      target[0] >= 0 &&
      target[1] >= 0 &&
      target[0] < rows &&
      target[1] < cols
    )
      return true;
    else return false;
  };
}

function getLevel(state) {
  level => state.world?.[level];
}
