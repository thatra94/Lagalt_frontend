import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsOverviewReducer } from "./projectsOverviewReducer" 
import { projectReducer } from "./projectReducer";
import { commentReducer } from "./commentReducer";


export const rootReducers = combineReducers({
  userReducer,
  projectsOverviewReducer,
  projectReducer,
  commentReducer
});
