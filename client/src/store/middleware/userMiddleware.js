import {
  ACTION_USER_FETCH_BY_USERID,
  userErrorAction,
  userSetByUserIdAction,
} from "../actions/userActions";

import { fetchUserByUserId } from "../../components/Login/LoginAPI";

export const userMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === ACTION_USER_FETCH_BY_USERID) {
    return (dispatch) =>
      fetchUserByUserId(action.payload)
        .then((user) => {
          return dispatch(userSetByUserIdAction(user));
        })
        .catch((error) => {
          dispatch(userErrorAction(error.message));
        });
  }
};
