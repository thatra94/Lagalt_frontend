import {
  ACTION_PROJECTS_OVERVIEW_FETCH,
  ACTION_PROJECTS_OVERVIEW_ERROR,
  ACTION_PROJECTS_OVERVIEW_SET,
  ACTION_PROJECTS_OVERVIEW_SEARCH,
  ACTION_PROJECTS_OVERVIEW_SEARCH_SUCCESS,
} from "../actions/projectsOverviewActions";

const initialState = {
  projects: [],
  error: '',
  fetching: false,
};

export function projectsOverviewReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_PROJECTS_OVERVIEW_FETCH:
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
      case ACTION_PROJECTS_OVERVIEW_SEARCH:
        return {
            ...state,
            fetching: false,
            error: action.payload
      }
      case ACTION_PROJECTS_OVERVIEW_SEARCH_SUCCESS:
        return {
            projects: action.payload,
            fetching: false,
            error: ''
      }
      
    default:
      return state
  }
}
