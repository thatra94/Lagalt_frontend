import { ACTION_INDUSTRIES_FETCH, industriesErrorAction, industriesSetAction} from '../actions/industriesActions'
import { fetchIndustries } from "../../components/ProjectsOverview/ProjectsOverviewAPI"
export const industriesMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);
  
    if (action.type === ACTION_INDUSTRIES_FETCH) {
      fetchIndustries(action.payload)
        .then((industries) => {
          dispatch(industriesSetAction(industries));
        })
        .catch((error) => {
          dispatch(industriesErrorAction(error.message));
        });
    }
  };