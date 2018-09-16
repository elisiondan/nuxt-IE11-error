import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const namespaced = true;
const state = {
  team: {},
  loading: false,
  error: null,
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
