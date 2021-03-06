import {
  ACTION_APPLICATIONS_FETCH_BY_ID,
  ACTION_APPLICATIONS_SET_BY_ID,
  ACTION_APPLICATIONS_ADD,
  ACTION_APPLICATIONS_ADD_SUCCESS,
  ACTION_APPLICATIONS_ERROR,
  ACTION_APPLICATIONS_UPDATE,
  ACTION_APPLICATIONS_UPDATE_SUCCESS,
} from '../actions/applicationsActions';

const initialState = {
  projectApplications: [],
  error: '',
  fetching: false,
};

export function applicationsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_APPLICATIONS_FETCH_BY_ID:
      return {
        ...state,
        fetching: true,
        error: '',
      };

    case ACTION_APPLICATIONS_SET_BY_ID:
      return {
        error: '',
        fetching: false,
        projectApplications: action.payload,
      };

    case ACTION_APPLICATIONS_ADD:
      return {
        ...state,
        fetching: true,
        error: '',
      };
    case ACTION_APPLICATIONS_ADD_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
      };

    case ACTION_APPLICATIONS_UPDATE:
      return {
        ...state,
        fetching: true,
        error: '',
      };
    case ACTION_APPLICATIONS_UPDATE_SUCCESS:
      return {
        projectApplications: [...state.projectApplications.filter(item => item.userId !== action.payload)],
        fetching: false,
        error: '',
      };

    case ACTION_APPLICATIONS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
