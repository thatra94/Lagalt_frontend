import {
  ACTION_USER_FETCH_BY_USERID,
  ACTION_USER_UPDATE,
  userErrorAction,
  userSetByUserIdAction,
} from "../actions/userActions";

import { fetchUserByUserId } from "../../components/Login/LoginAPI";
import { putUser } from "../../components/Profile/ProfileAPI";

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

  if (action.type === ACTION_USER_UPDATE) {
    putUser(action.payload)
      .then(() => {
        dispatch(userSetByUserIdAction(action.payload));
      })
      .catch((error) => {
        dispatch(userErrorAction(error.message));
      });
  }
};
