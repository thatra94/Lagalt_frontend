import {
  fetchProjectsByIndustry,
  fetchProjectsBySearchString,
  fetchWithPostProjects,
} from "../../components/ProjectsOverview/ProjectsOverviewAPI";
import {
  ACTION_PROJECTS_OVERVIEW_FETCH,
  ACTION_PROJECTS_OVERVIEW_FETCH_BY_INDUSTRY,
  ACTION_PROJECTS_OVERVIEW_SEARCH,
  projectsOverviewErrorAction,
  projectsOverviewSearchSuccessAction,
  projectsOverviewSetAction,
} from "../actions/projectsOverviewActions";

export const projectsOverviewMiddleware = ({ getState, dispatch }) => (
  next
) => (action) => {
  next(action);

  if (action.type === ACTION_PROJECTS_OVERVIEW_FETCH) {
    fetchWithPostProjects(action.payload)
      .then((projects) => {
        dispatch(projectsOverviewSetAction(projects));
      })
      .catch((error) => {
        dispatch(projectsOverviewErrorAction(error.message));
      });
  }

  if (action.type === ACTION_PROJECTS_OVERVIEW_SEARCH) {
    fetchProjectsBySearchString(action.payload)
      .then((projects) => {
        dispatch(projectsOverviewSearchSuccessAction(projects));
      })
      .catch((error) => {
        dispatch(projectsOverviewErrorAction(error));
      });
  }

  if (action.type === ACTION_PROJECTS_OVERVIEW_FETCH_BY_INDUSTRY) {
    fetchProjectsByIndustry(action.payload)
      .then((projects) => {
        dispatch(projectsOverviewSetAction(projects));
      })
      .catch((error) => {
        dispatch(projectsOverviewErrorAction(error));
      });
  }
};
