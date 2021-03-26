export const ACTION_PROJECTS_OVERVIEW_FETCH = "projects-overview:FETCH";
export const ACTION_PROJECTS_OVERVIEW_ERROR = "projects-overview:ERROR";
export const ACTION_PROJECTS_OVERVIEW_SET = "projects-overview:SET";
export const ACTION_PROJECTS_OVERVIEW_SEARCH = "projects-overview:SEARCH";
export const ACTION_PROJECTS_OVERVIEW_SEARCH_SUCCESS = "projects-overview:SEARCH_SUCCESS"

export const projectsOverviewFetchAction = (payload) => ({
    type: ACTION_PROJECTS_OVERVIEW_FETCH,
    payload,
});

export const projectsOverviewSetAction = payload => ({
  type: ACTION_PROJECTS_OVERVIEW_SET,
  payload
})

export const projectsOverviewSearchAction = payload => ({
  type: ACTION_PROJECTS_OVERVIEW_SEARCH,
  payload
})


export const projectsOverviewSearchSuccessAction = payload => ({
  type: ACTION_PROJECTS_OVERVIEW_SEARCH_SUCCESS,
  payload
})

export const projectsOverviewErrorAction = (payload) => ({
  type: ACTION_PROJECTS_OVERVIEW_ERROR,
  payload,
});
