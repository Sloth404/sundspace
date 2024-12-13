import { createStore } from 'vuex';

export default createStore({
  state: {
    showConfirmation: false,
    confirmCallback: null as (() => void) | null,
    cancelCallback: null as (() => void) | null,
  },
  mutations: {
    SHOW_CONFIRMATION(state, { confirmCallback, cancelCallback }) {
      state.showConfirmation = true;
      state.confirmCallback = confirmCallback;
      state.cancelCallback = cancelCallback;
    },
    HIDE_CONFIRMATION(state) {
      state.showConfirmation = false;
    },
  },
  actions: {
    // showConfirmation({ commit }, { confirmCallback, cancelCallback }) {
    //  commit('SHOW_CONFIRMATION', { confirmCallback, cancelCallback });
    //},
    hideConfirmation({ commit }) {
      commit('HIDE_CONFIRMATION');
    },
  },
  getters: {
    showConfirmation: (state) => state.showConfirmation,
  },
});
