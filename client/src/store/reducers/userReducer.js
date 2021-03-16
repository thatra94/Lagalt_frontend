import {
  ACTION_USER_ERROR,
  ACTION_USER_FETCH_BY_ID,
  ACTION_USER_SET_BY_ID,
  ACTION_USER_FETCH_BY_USERID,
  ACTION_USER_SET_BY_USERID,
} from "../actions/userActions";

const initialState = {
  user: null,
  error: "",
  fetching: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_FETCH_BY_ID:
      return {
        user: null,
        fetching: true,
        error: "",
      };

    case ACTION_USER_SET_BY_ID:
      return {
        error: "",
        fetching: false,
        user: action.payload,
      };

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
