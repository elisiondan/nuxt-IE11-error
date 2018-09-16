import api from '@/api';
import {
  TEAM_SUCCESS,
  TEAM_PENDING,
  TEAM_FAILED,
} from '@/store/mutation-types';
import parseNestedData from '@/utils/parseNestedData';

const TABLE_NAME = 'team';

const actions = {
  fetchTeam({ commit }) {
    commit(TEAM_PENDING);

    return new Promise((resolve, reject) => {
      api.getItems(TABLE_NAME)
        .then(res => {
          if (res.data.length === 0) {
            commit(TEAM_FAILED, 'Team not found.');
            reject('Team not found');
          }
          const flattenedData = parseNestedData(res.data);
          commit(TEAM_SUCCESS, flattenedData[0]);
          resolve();
        })
        .catch(error => {
          commit(TEAM_FAILED, error);
          reject(error);
        });
    });
  },
};

export default actions;
