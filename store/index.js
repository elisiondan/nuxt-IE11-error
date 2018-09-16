import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const actions = {};
const mutations = {};
const state = {
  loading: false,
  hydrated: false,
  error: false,
};

let store;

const createStore = () => {
  return store || (store = new Vuex.Store({
    state,
    mutations,
    actions,
  }));
};

export default createStore;
