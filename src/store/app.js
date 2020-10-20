import { sleep } from '../lib/utils';
import { TILE_BORDER } from '../lib/constants';

const state = () => ({
  tileSize: 25,
  rarityTolerance: 0, // weapons/armor below this rarity will be ignored
  playerBuilt: true, // becomes true after initial setup
  gameOver: false,
  toolTip: 0, // count: 0 = false, 1+ = true
  mouseX: 0,
  mouseY: 0,
  toolTipObject: {},
  displayMarket: false,
  displayGear: false,
  dimensions: { h: 0, w: 0 },
});

const getters = {
  tileSize: state => state.tileSize,
  rarityTolerance: state => state.rarityTolerance,
  playerBuilt: state => state.playerBuilt,
  gameOver: state => state.gameOver,
  toolTip: state => state.toolTip > 0,
  mouseX: state => state.mouseX,
  mouseY: state => state.mouseY,
  toolTipObject: state => state.toolTipObject,
  displayMarket: state => state.displayMarket,
  displayGear: state => state.displayGear,
  dimensions: state => state.dimensions,
  grid: state => getGridSize(state.dimensions, state.tileSize),
};

const mutations = {
  setTileSize(state, val) {
    state.tileSize = +val;
  },
  setRarityTolerance(state, val) {
    state.rarityTolerance = val;
  },
  setPlayerBuilt(state, val) {
    state.playerBuilt = val;
  },
  setGameOver(state, val) {
    state.gameOver = val;
  },
  setToolTip(state, val) {
    state.toolTip = val;
  },
  setMouseX(state, val) {
    state.mouseX = val;
  },
  setMouseY(state, val) {
    state.mouseY = val;
  },
  setToolTipObject(state, val) {
    state.toolTipObject = val;
  },
  setDisplayMarket(state, val) {
    state.displayMarket = val;
  },
  setDisplayGear(state, val) {
    state.displayGear = val;
  },
  setDimensions(state, val) {
    state.dimensions = val;
  },
};

const actions = {
  updateToolTip({ state, commit }, { mouseX, mouseY, toolTipObject }) {
    commit('setMouseX', mouseX);
    commit('setMouseY', mouseY);
    commit('setToolTipObject', toolTipObject);
    commit('setToolTip', state.toolTip + 1);
    sleep(4000).then(() => {
      commit('setToolTip', state.toolTip - 1);
    });
  },
};

export default { state, getters, mutations, actions, namespaced: true };

/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function getGridSize(window, cellSize) {
  let headerH = 50; // header height in pixels
  let footerH = 0; // footer height in pixels
  let cellMargin = cellSize * TILE_BORDER; // margin between tiles
  let tileSize = +cellSize + 2 * cellMargin; // add margin to tilesize
  let rows = Math.ceil((window.h - headerH - footerH) / tileSize);
  let cols = Math.ceil(window.w / tileSize);
  return { height: rows, width: cols };
}
