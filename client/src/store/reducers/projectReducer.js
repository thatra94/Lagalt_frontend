import {
    ACTION_PROJECT_ERROR,
    ACTION_PROJECT_FETCH_BY_ID,
    ACTION_PROJECT_SET_BY_ID
} from "../actions/projectActions";

const initialState = {
    project: null,
    error: '',
    fetching: false
}

export function projectReducer(state = initialState, action) {
    switch ( action.type ) {

        case ACTION_PROJECT_FETCH_BY_ID:
            return {
                project: null,
                fetching: true,
                error: ''
            }

        case ACTION_PROJECT_SET_BY_ID:
            return {
                error: '',
                fetching: false,
                project: action.payload
            }

        case ACTION_PROJECT_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}