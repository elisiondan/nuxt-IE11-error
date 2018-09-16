
const getters = {
  getTeamImage(state, getter, rootState) {
    const apiURL = rootState.apiURL;
    if (apiURL && state.team.team_video_details) {
      return `${apiURL}${state.team.team_image.url}`;
    }

    return '';
  },
  getTeamDetails(state) {
    if (state.team.team_video_details) {
      return JSON.parse(state.team.team_video_details);
    }

    return {};
  },
  getTeamDescription: (state, getter, rootState) => {
    if (state.team.translations && state.team.translations[rootState.languages.currentLang]) {
      return state.team.translations[rootState.languages.currentLang].team_description;
    }
    return '';
  },
};

export default getters;
