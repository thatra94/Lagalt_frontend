import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsOverviewReducer } from "./projectsOverviewReducer" 
import { projectReducer } from "./projectReducer";

export const rootReducers = combineReducers({
  userReducer,
  projectsOverviewReducer,
  projectReducer
});
