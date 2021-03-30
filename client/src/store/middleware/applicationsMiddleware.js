import {
  fetchApplicationsByProjectId,
  postApplication,
  putApplication,
} from "../../components/Project/ProjectAPI";
import {
  ACTION_APPLICATIONS_ADD,
  ACTION_APPLICATIONS_FETCH_BY_ID,
  ACTION_APPLICATIONS_UPDATE,
  applicationsAddSuccessAction,
  applicationsErrorAction,
  applicationsFetchingByIdAction,
  applicationsSetByIdAction,
} from "../actions/applicationsActions";

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
        console.log(application);
        dispatch(applicationsFetchingByIdAction(application.projectId));
      })
      .catch((error) => {
        dispatch(applicationsErrorAction(error.message));
      });
  }
};
