import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsOverviewReducer } from "./projectsOverviewReducer";
import { projectReducer } from "./projectReducer";
import { commentReducer } from "./commentReducer";
import { userProjectsReducer } from "./userProjectsReducer";
import { applicationsReducer } from "./applicationsReducer";
import { industriesReducer } from "./industriesReducer";

export const rootReducers = combineReducers({
  userReducer,
  projectsOverviewReducer,
  projectReducer,
  commentReducer,
  userProjectsReducer,
  applicationsReducer,
  industriesReducer
});
