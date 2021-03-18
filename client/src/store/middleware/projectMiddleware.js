import {
    ACTION_PROJECT_FETCH_BY_ID,
    projectErrorAction,
    projectSetByIdAction
} from "../actions/projectActions";
import {fetchProjectById } from "../../components/Project/ProjectAPI"

export const projectMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_PROJECT_FETCH_BY_ID) {
        fetchProjectById( action.payload )
            .then(project => {
                dispatch( projectSetByIdAction( project) )
            })
            .catch(error => {
                dispatch( projectErrorAction( error.message ) )
            })
    }
}