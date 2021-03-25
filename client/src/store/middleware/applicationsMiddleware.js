import {
    ACTION_APPLICATIONS_FETCH_BY_ID,
    ACTION_APPLICATIONS_SET_BY_ID,
    ACTION_APPLICATIONS_ADD,
    ACTION_APPLICATIONS_ADD_SUCCESS,
    ACTION_APPLICATIONS_ERROR,
    applicationsErrorAction,
    applicationsSetByIdAction,
    applicationsAddAction,
    applicationsAddSuccessAction,
  } from '../actions/applicationsActions';
  import { fetchApplicationsByProjectId, postApplication} from "../../components/Project/ProjectAPI"
  
  export const applicationsMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);  
  
    if (action.type === ACTION_APPLICATIONS_FETCH_BY_ID) {      
      fetchApplicationsByProjectId(action.payload)
        .then((application) => {
          dispatch(applicationsSetByIdAction(application));
        })
        .catch((error) => {
          dispatch(applicationsErrorAction(error.message));
        });
    }
  
    if (action.type === ACTION_APPLICATIONS_ADD) {
      postApplication( action.payload )
          .then(application => {
              dispatch(applicationsAddSuccessAction(application));
          })
          .catch(error => {
              dispatch( applicationsErrorAction(error) )
          })
      }
  };