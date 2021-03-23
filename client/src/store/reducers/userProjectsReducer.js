import {
  ACTION_USER_ERROR,
  ACTION_USER_PROJECTS_PERSONAL_SET_BY_USERID,
  ACTION_USER_PROJECTS_FETCH_BY_USERID,
  ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID,
  ACTION_USER_PROJECTS_SET_BY_USERID,
  ACTION_USER_ADD_PERSONAL_PROJECTS,
  ACTION_USER_ADD_PERSONAL_PROJECTS_SUCCESS,
} from "../actions/userProjectsActions";

const initialState = {
  projects: [],
  personalProjects: [],
  error: "",
  fetching: false,
};

export function userProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_PROJECTS_FETCH_BY_USERID:
      return {
        ...state,
        error: "",
        fetching: true,
      };

    case ACTION_USER_PROJECTS_SET_BY_USERID:
      return {
        ...state,
        error: "",
        fetching: false,
        projects: action.payload,
      };

    case ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID:
      return {
        ...state,
        error: "",
        fetching: true,
      };

    case ACTION_USER_PROJECTS_PERSONAL_SET_BY_USERID:
      return {
        ...state,
        error: "",
        personalProjects: action.payload,
        fetching: false,
      };

    case ACTION_USER_ADD_PERSONAL_PROJECTS:
      return {
        ...state,
        error: "",
        fetching: true,
      };

    case ACTION_USER_ADD_PERSONAL_PROJECTS_SUCCESS:
      return {
        ...state,
        error: "",
        personalProjects: [...state.personalProjects, action.payload],
        fetching: false,
      };

    case ACTION_USER_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
