import {
  ACTION_PROJECTS_FETCHING,
  projectsErrorAction,
  projectsSetAction,
} from "../actions/projectsActions";
import {fetchProjects} from "../../components/ProjectsOverview/ProjectsOverviewAPI"

export const projectsMiddleware = ({ getState, dispatch }) => next => action => {

  next(action)

  if (action.type === ACTION_PROJECTS_FETCHING) {

    const { projectsReducer } = getState()

    if (projectsReducer.projects.length > 0) {
      return dispatch(projectsSetAction(projectsReducer.projects))
    }

    fetchProjects().then(projects => {
      dispatch(projectsSetAction(projects))
    }).catch(error => {
      dispatch(projectsErrorAction(error.message))
    })

  }

}