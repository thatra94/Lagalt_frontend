import {
  ACTION_PROJECTS_OVERVIEW_FETCH,
  ACTION_PROJECTS_OVERVIEW_SEARCH,

  projectsOverviewErrorAction,
  projectsOverviewSetAction,
  projectsOverviewSearchSuccessAction
} from "../actions/projectsOverviewActions";
import {fetchProjects,fetchProjectsBySearchString} from "../../components/ProjectsOverview/ProjectsOverviewAPI"

export const projectsOverviewMiddleware = ({ getState, dispatch }) => next => action => {

  next(action)

  if (action.type === ACTION_PROJECTS_OVERVIEW_FETCH) {

    

    fetchProjects().then(projects => {
      dispatch(projectsOverviewSetAction(projects))
    }).catch(error => {
      dispatch(projectsOverviewErrorAction(error.message))
    })
  }

  if (action.type === ACTION_PROJECTS_OVERVIEW_SEARCH) {
    fetchProjectsBySearchString( action.payload )
        .then(projects => {
            dispatch(projectsOverviewSearchSuccessAction(projects));
        })
        .catch(error => {
            dispatch( projectsOverviewErrorAction(error) )
        })
    }
}