export const ACTION_USER_FETCH_BY_ID = "user:FETCHING_BY_ID";
export const ACTION_USER_SET_BY_ID = "user:SET_BY_ID";
export const ACTION_USER_ERROR = "user:ERROR";

export const userFetchingByIdAction = (payload) => ({
  type: ACTION_USER_FETCH_BY_ID,
  payload,
});

export const userSetByIdAction = (payload) => ({
  type: ACTION_USER_SET_BY_ID,
  payload,
});

export const userErrorAction = (payload) => ({
  type: ACTION_USER_ERROR,
  payload,
});
