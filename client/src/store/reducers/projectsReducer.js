import {
  ACTION_PROJECTS_FETCHING,
  ACTION_PROJECTS_ERROR,
  ACTION_PROJECTS_SET,
} from "../actions/projectsActions";

const initialState = {
  projects: [],
  error: '',
  fetching: false,
};

export function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_PROJECTS_FETCHING:
      return {
        ...state,
        fetching: true,
        error: '',
      };

    case ACTION_PROJECTS_SET:
      return {
        error: '',
        fetching: false,
        projects: action.payload
      }

    case ACTION_PROJECTS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      
    default:
      return state
  }
}
