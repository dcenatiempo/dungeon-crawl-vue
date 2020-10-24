import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    someState: true,
  },
  getters: {
    someState: state => state.someState,
  },
  mutations: {
    setSomeState(state, val) {
      state.someState = val;
    },
  },
  actions: {
    toggleSomeState({ state, commit }) {
      commit('setSomeState', !state.someState);
    },
  },
});
