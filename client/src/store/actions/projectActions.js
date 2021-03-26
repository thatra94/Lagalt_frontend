export const ACTION_PROJECT_FETCH_BY_ID = "project:FETCHING_BY_ID";
export const ACTION_PROJECT_SET_BY_ID = "project:SET_BY_ID";
export const ACTION_PROJECT_UPDATE = "project:UPDATE";
export const ACTION_PROJECT_ERROR = "project:ERROR";

export const projectFetchingByIdAction = (payload) => ({
  type: ACTION_PROJECT_FETCH_BY_ID,
  payload,
});

export const projectSetByIdAction = (payload) => ({
  type: ACTION_PROJECT_SET_BY_ID,
  payload,
});

export const projectUpdateAction = (payload) => ({
  type: ACTION_PROJECT_UPDATE,
  payload,
});

export const projectErrorAction = (payload) => ({
  type: ACTION_PROJECT_ERROR,
  payload,
});
