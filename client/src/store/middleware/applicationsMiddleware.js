import {
  ACTION_APPLICATIONS_FETCH_BY_ID,
  ACTION_APPLICATIONS_SET_BY_ID,
  ACTION_APPLICATIONS_ADD,
  ACTION_APPLICATIONS_ADD_SUCCESS,
  ACTION_APPLICATIONS_ERROR,
  applicationsErrorAction,
  applicationsSetByIdAction,
  applicationsAddAction,
  applicationsUpdateSuccessAction,
  applicationsAddSuccessAction,
  ACTION_APPLICATIONS_UPDATE,
} from '../actions/applicationsActions';
import {
  putApplication,
  fetchApplicationsByProjectId,
  postApplication,
} from '../../components/Project/ProjectAPI';

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
    postApplication(action.payload)
      .then((application) => {
        console.log(application);
        dispatch(applicationsAddSuccessAction(application.userId));
      })
      .catch((error) => {
        dispatch(applicationsErrorAction(error.message));
      });
  }
  if (action.type === ACTION_APPLICATIONS_UPDATE) {
    putApplication(action.payload)
      .then((application) => {
        dispatch(applicationsUpdateSuccessAction(application));
      })
      .catch((error) => {
        dispatch(applicationsErrorAction(error.message));
      });
  }
};
