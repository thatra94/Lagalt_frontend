import {
  ACTION_USER_ERROR,
  ACTION_USER_FETCH_BY_USERID,
  ACTION_USER_SET_BY_USERID,
  ACTION_USER_ADD_USER_SKILL,
} from "../actions/userActions";

const initialState = {
  user: {
    id: null,
    name: "",
    userId: "",
    imageUrl: "",
    description: "",
    skills: [],
  },
  projects: [],
  personalProjects: [],
  error: "",
  fetching: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_FETCH_BY_USERID:
      return {
        user: null,
        projects: [],
        personalProjects: [],
        fetching: true,
        error: "",
      };

    case ACTION_USER_SET_BY_USERID:
      return {
        error: "",
        fetching: false,
        user: action.payload,
        projects: [],
        personalProjects: [],
      };

    case ACTION_USER_ADD_USER_SKILL:
      return {
        ...state,
        user: {
          ...state.user,
          skills: [...state.user.skills, { name: action.payload }],
        },
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
