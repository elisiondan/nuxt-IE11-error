import { TEAM_PENDING, TEAM_SUCCESS, TEAM_FAILED } from '@/store/mutation-types';

const mutations = {
  [TEAM_PENDING](state) {
    state.loading = true;
    state.error = null;
  },
  [TEAM_SUCCESS](state, data) {
    state.team = data;
    state.loading = false;
  },
  [TEAM_FAILED](state, data) {
    state.error = data;
    state.loading = false;
  },
};

export default mutations;
