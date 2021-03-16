export const ACTION_PROJECTS_FETCHING = "projects:FETCHING";
export const ACTION_PROJECTS_ERROR = "projects:ERROR";
export const ACTION_PROJECTS_SET = "projects:SET"

export const projectsFetchingAction = (payload) => ({
    type: ACTION_PROJECTS_FETCHING,
    payload,
});

export const projectsSetAction = payload => ({
  type: ACTION_PROJECTS_SET,
  payload
})

export const projectsErrorAction = (payload) => ({
  type: ACTION_PROJECTS_ERROR,
  payload,
});
