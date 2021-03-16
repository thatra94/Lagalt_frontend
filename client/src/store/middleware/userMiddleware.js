import {
  ACTION_USER_FETCH_BY_ID,
  ACTION_USER_FETCH_BY_USERID,
  userErrorAction,
  userSetByIdAction,
} from "../actions/userActions";

import {
  fetchUserById,
  fetchUserByUserId,
} from "../../components/Login/LoginAPI";

export const userMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === ACTION_USER_FETCH_BY_ID) {
    fetchUserById(action.payload)
      .then((user) => {
        dispatch(userSetByIdAction(user));
      })
      .catch((error) => {
        dispatch(userErrorAction(error.message));
      });
  }

  if (action.type === ACTION_USER_FETCH_BY_USERID) {
    return (dispatch) =>
      fetchUserByUserId(action.payload)
        .then((user) => {
          return dispatch(userSetByIdAction(user));
        })
        .catch((error) => {
          dispatch(userErrorAction(error.message));
        });
  }
};
