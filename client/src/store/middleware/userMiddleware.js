import {
  ACTION_USER_FETCH_BY_USERID,
  ACTION_USER_PROJECTS_FETCH_BY_USERID,
  userErrorAction,
  userSetByUserIdAction,
  userProjectsSetByUserIdAction,
} from "../actions/userActions";

import { fetchUserByUserId } from "../../components/Login/LoginAPI";

import { fetchUserProjectsByUserId } from "../../components/Profile/ProfileAPI";

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

  if (action.type === ACTION_USER_PROJECTS_FETCH_BY_USERID) {
    console.log("action");
    fetchUserProjectsByUserId(action.payload)
      .then((projects) => {
        dispatch(userProjectsSetByUserIdAction(projects));
      })
      .catch((error) => {
        dispatch(userErrorAction(error.message));
      });
  }
};
