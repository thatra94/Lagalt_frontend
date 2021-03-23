export const ACTION_USER_ADD_PERSONAL_PROJECTS =
  "userProjects:ADD_PERSONAL_PROJECT";
export const ACTION_USER_ADD_PERSONAL_PROJECTS_SUCCESS =
  "userProjects:ADD_PERSONAL_PROJECTS_SUCCESS";
export const ACTION_USER_PROJECTS_FETCH_BY_USERID =
  "userProjects:FETCHING_PROJECTS_BY_USERID";
export const ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID =
  "userProjects:FETCHING_PERSONAL_PROJECTS_BY_USERID";
export const ACTION_USER_PROJECTS_PERSONAL_SET_BY_USERID =
  "userProjects:SET_USER_PROJECTS_PERSONAL_BY_USERID";
export const ACTION_USER_PROJECTS_SET_BY_USERID =
  "userProjects:SET_PROJECTS_BY_USERID";
export const ACTION_USER_ERROR = "userProjects:ERROR";

export const userProjectsFetchingByUserIdAction = (payload) => ({
  type: ACTION_USER_PROJECTS_FETCH_BY_USERID,
  payload,
});

export const userProjectsSetByUserIdAction = (payload) => ({
  type: ACTION_USER_PROJECTS_SET_BY_USERID,
  payload,
});

export const userPersonalProjectsSetByUserIdAction = (payload) => ({
  type: ACTION_USER_PROJECTS_PERSONAL_SET_BY_USERID,
  payload,
});
export const userPersonalProjectsFetchingByUserIdAction = (payload) => ({
  type: ACTION_USER_PERSONAL_PROJECTS_FETCH_BY_USERID,
  payload,
});

export const userAddPersonalProjectAction = (payload) => ({
  type: ACTION_USER_ADD_PERSONAL_PROJECTS,
  payload,
});
export const userAddPersonalProjectSuccessAction = (payload) => ({
  type: ACTION_USER_ADD_PERSONAL_PROJECTS_SUCCESS,
  payload,
});

export const userErrorAction = (payload) => ({
  type: ACTION_USER_ERROR,
  payload,
});
