export const ACTION_USER_FETCH_BY_USERID = "user:FETCHING_BY_USERID";
export const ACTION_USER_SET_BY_USERID = "user:SET_BY_USERID";
export const ACTION_USER_ADD_USER_SKILL = "user:ADD_SKILL";
export const ACTION_USER_PROJECTS_FETCH_BY_USERID =
  "user:FETCHING_PROJECTS_BY_USERID";
export const ACTION_USER_PROJECTS_SET_BY_USERID = "user:SET_PROJECTS_BY_USERID";
export const ACTION_USER_ERROR = "user:ERROR";

export const userFetchingByUserIdAction = (payload) => ({
  type: ACTION_USER_FETCH_BY_USERID,
  payload,
});

export const userSetByUserIdAction = (payload) => ({
  type: ACTION_USER_SET_BY_USERID,
  payload,
});

export const userProjectsFetchingByUserIdAction = (payload) => ({
  type: ACTION_USER_PROJECTS_FETCH_BY_USERID,
  payload,
});

export const userProjectsSetByUserIdAction = (payload) => ({
  type: ACTION_USER_PROJECTS_SET_BY_USERID,
  payload,
});

export const userAddSkill = (payload) => ({
  type: ACTION_USER_ADD_USER_SKILL,
  payload,
});

export const userErrorAction = (payload) => ({
  type: ACTION_USER_ERROR,
  payload,
});
