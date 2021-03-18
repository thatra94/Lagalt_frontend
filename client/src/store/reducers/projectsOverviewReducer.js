import {
  ACTION_PROJECTS_OVERVIEW_FETCHING,
  ACTION_PROJECTS_OVERVIEW_ERROR,
  ACTION_PROJECTS_OVERVIEW_SET,
} from "../actions/projectsOverviewActions";

const initialState = {
  projects: [],
  error: '',
  fetching: false,
};

export function projectsOverviewReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_PROJECTS_OVERVIEW_FETCHING:
      return {
        ...state,
        fetching: true,
        error: '',
      };

    case ACTION_PROJECTS_OVERVIEW_SET:
      return {
        error: '',
        fetching: false,
        projects: action.payload
      }

    case ACTION_PROJECTS_OVERVIEW_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      
    default:
      return state
  }
}
