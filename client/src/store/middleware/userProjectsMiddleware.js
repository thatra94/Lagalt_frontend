import {
  ACTION_USER_PROJECTS_FETCH_BY_USERID,
  userErrorAction,
  userProjectsSetByUserIdAction,
  ACTION_USER_ADD_PERSONAL_PROJECTS,
  userAddPersonalProjectSuccessAction,
  ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID,
  userPersonalProjectsSetByUserIdAction,
} from "../actions/userProjectsActions";

import {
  fetchUserProjectsByUserId,
  PostUserPersonalProject,
  fetchUserPersonalProjectsByUserId,
} from "../../components/Profile/ProfileAPI";

export const userProjectsMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

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

  if (action.type === ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID) {
    console.log("action");
    fetchUserPersonalProjectsByUserId(action.payload)
      .then((projects) => {
        dispatch(userPersonalProjectsSetByUserIdAction(projects));
      })
      .catch((error) => {
        dispatch(userErrorAction(error.message));
      });
  }

  if (action.type === ACTION_USER_ADD_PERSONAL_PROJECTS) {
    console.log("action");
    PostUserPersonalProject(action.payload)
      .then((projects) => {
        dispatch(userAddPersonalProjectSuccessAction(projects));
      })
      .catch((error) => {
        dispatch(userErrorAction(error.message));
      });
  }
};
