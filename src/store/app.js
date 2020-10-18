import { sleep } from '../lib/utils';

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
  grid: state => getGridSize(state.dimensions, state.tileSize, false, false),
};

const mutations = {
  setTileSize(state, val) {
    state.settileSize = val;
  },
  setRarityTolerance(state, val) {
    state.setrarityTolerance = val;
  },
  setPlayerBuilt(state, val) {
    state.setplayerBuilt = val;
  },
  setGameOver(state, val) {
    state.setgameOver = val;
  },
  setToolTip(state, val) {
    state.settoolTip = val;
  },
  setMouseX(state, val) {
    state.setmouseX = val;
  },
  setMouseY(state, val) {
    state.setmouseY = val;
  },
  setToolTipObject(state, val) {
    state.settoolTipObject = val;
  },
  setDisplayMarket(state, val) {
    state.setdisplayMarket = val;
  },
  setDisplayGear(state, val) {
    state.setdisplayGear = val;
  },
  setDimensions(state, val) {
    state.dimensions = val;
  },
};

const actions = {
  updateToolTip({ state, commit }, { mouseX, mouseY, toolTipObject }) {
    commit('setMouseX', mouseX);
    commit('setMouseY', mouseY);
    commit('setTooltipObject', toolTipObject);
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

function getGridSize(window, cellSize, lsidebar, rsidebar) {
  let headerH = 50; // header height in pixels
  let footerH = 0; // footer height in pixels
  let lsb = lsidebar ? 0.3 : 0; // sidebar width in %
  let rsb = rsidebar ? 0.3 : 0; // sidebar width in %
  let cellMargin = cellSize / 12.5; // margin between tiles
  let tileSize = +cellSize + 2 * cellMargin; // add margin to tilesize
  let rows = Math.round(
    (window.h - headerH - footerH - 2 * tileSize) / tileSize
  );
  let cols = Math.round((window.w * (1 - lsb - rsb) - 2 * tileSize) / tileSize);
  return { height: rows, width: cols };
}
