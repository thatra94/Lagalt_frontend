import {
  ACTION_PROJECTS_OVERVIEW_FETCHING,
  projectsOverviewErrorAction,
  projectsOverviewSetAction,
} from "../actions/projectsOverviewActions";
import {fetchProjects} from "../../components/ProjectsOverview/ProjectsOverviewAPI"

export const projectsOverviewMiddleware = ({ getState, dispatch }) => next => action => {

  next(action)

  if (action.type === ACTION_PROJECTS_OVERVIEW_FETCHING) {

    const { projectsOverviewReducer } = getState()

    if (projectsOverviewReducer.projects.length > 0) {
      return dispatch(projectsOverviewSetAction(projectsOverviewReducer.projects))
    }

    fetchProjects().then(projects => {
      dispatch(projectsOverviewSetAction(projects))
    }).catch(error => {
      dispatch(projectsOverviewErrorAction(error.message))
    })
  }
}