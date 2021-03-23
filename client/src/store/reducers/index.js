import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsOverviewReducer } from "./projectsOverviewReducer";
import { projectReducer } from "./projectReducer";
import { userProjectsReducer } from "./userProjectsReducer";
export const rootReducers = combineReducers({
  userReducer,
  projectsOverviewReducer,
  projectReducer,
  userProjectsReducer,
});
