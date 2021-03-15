import {
  ACTION_USER_FETCH_BY_ID,
  userErrorAction,
  userSetByIdAction,
} from "../actions/userActions";

import { fetchUserById } from "../../components/Login/LoginAPI";

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
};
