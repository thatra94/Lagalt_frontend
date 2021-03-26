import {
  ACTION_PROJECT_FETCH_BY_ID,
  ACTION_PROJECT_UPDATE,
  projectErrorAction,
  projectSetByIdAction,
} from "../actions/projectActions";
import { fetchProjectById } from "../../components/Project/ProjectAPI";
import { putProject } from "../../components/ProjectSettings/ProjectSettingsAPI";

export const projectMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === ACTION_PROJECT_FETCH_BY_ID) {
    fetchProjectById(action.payload)
      .then((project) => {
        dispatch(projectSetByIdAction(project));
      })
      .catch((error) => {
        dispatch(projectErrorAction(error.message));
      });
  }

  if (action.type === ACTION_PROJECT_UPDATE) {
    putProject(action.payload)
      .then(() => {
        dispatch(projectSetByIdAction(action.payload));
      })
      .catch((error) => {
        dispatch(projectErrorAction(error.message));
      });
  }
};
