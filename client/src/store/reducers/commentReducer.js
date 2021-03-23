import {
    ACTION_COMMENT_FETCH_BY_ID,
    ACTION_COMMENT_SET_BY_ID,
    ACTION_COMMENT_ADD,
    ACTION_COMMENT_ADD_SUCCESS,
    ACTION_COMMENT_ERROR,
} from "../actions/commentActions";

const initialState = {
    comment: [],
    error: '',
    fetching: false
}

export function commentReducer(state = initialState, action) {
    switch ( action.type ) {

        case ACTION_COMMENT_FETCH_BY_ID:
            return {
                ...state,
                fetching: true,
                error: ''
            }

        case ACTION_COMMENT_SET_BY_ID:
            return {
                error: '',
                fetching: false,
                comment: action.payload
            }

        case ACTION_COMMENT_ADD:
            return {
                ...state,
                fetching: true,
                error: ''
            }
        case ACTION_COMMENT_ADD_SUCCESS:
            return {
                comment: [...state.comment,action.payload],
                fetching: false,
                error: ''
            }
        case ACTION_COMMENT_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}