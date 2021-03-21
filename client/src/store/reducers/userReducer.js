import {
  ACTION_USER_ERROR,
  ACTION_USER_FETCH_BY_USERID,
  ACTION_USER_SET_BY_USERID,
  ACTION_USER_ADD_USER_SKILL,
  ACTION_USER_PROJECTS_FETCH_BY_USERID,
  ACTION_USER_PROJECTS_SET_BY_USERID,
} from "../actions/userActions";

const initialState = {
  user: {
    id: null,
    name: "",
    userId: "",
    imageUrl: null,
    description: null,
    skills: [],
  },
  projects: null,
  error: "",
  fetching: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_FETCH_BY_USERID:
      return {
        user: null,
        fetching: true,
        error: "",
      };

    case ACTION_USER_SET_BY_USERID:
      return {
        error: "",
        fetching: false,
        user: action.payload,
      };

    case ACTION_USER_ADD_USER_SKILL:
      return {
        ...state,
        user: {
          ...state.user,
          skills: [...state.user.skills, action.payload],
        },
      };

    case ACTION_USER_PROJECTS_FETCH_BY_USERID:
      return {
        ...state,
        error: "",
        fetching: true,
        projects: null,
      };

    case ACTION_USER_PROJECTS_SET_BY_USERID:
      return {
        ...state,
        error: "",
        fetching: false,
        projects: action.payload,
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
