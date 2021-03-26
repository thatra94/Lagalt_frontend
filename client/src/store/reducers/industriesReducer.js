import {
    ACTION_INDUSTRIES_ERROR,
    ACTION_INDUSTRIES_FETCH,
    ACTION_INDUSTRIES_SET
} from "../actions/industriesActions";

const initialState = {
    industries: [],    
    error: '',
    fetching: false
}

export function industriesReducer(state = initialState, action) {
    switch ( action.type ) {

        case ACTION_INDUSTRIES_FETCH:
            return {
                industries: [],
                fetching: true,
                error: ''
            }

        case ACTION_INDUSTRIES_SET:
            return {
                error: '',
                fetching: false,
                industries: action.payload
            }

        case ACTION_INDUSTRIES_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }

        default:
            return state
    }
}