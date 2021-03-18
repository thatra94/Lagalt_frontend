export const ACTION_PROJECTS_OVERVIEW_FETCHING = "projects-overview:FETCHING";
export const ACTION_PROJECTS_OVERVIEW_ERROR = "projects-overview:ERROR";
export const ACTION_PROJECTS_OVERVIEW_SET = "projects-overview:SET"

export const projectsOverviewFetchingAction = (payload) => ({
    type: ACTION_PROJECTS_OVERVIEW_FETCHING,
    payload,
});

export const projectsOverviewSetAction = payload => ({
  type: ACTION_PROJECTS_OVERVIEW_SET,
  payload
})

export const projectsOverviewErrorAction = (payload) => ({
  type: ACTION_PROJECTS_OVERVIEW_ERROR,
  payload,
});
