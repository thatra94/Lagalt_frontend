import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { projectsReducer } from "./projectsReducer" 

export const rootReducers = combineReducers({
  userReducer,
  projectsReducer,
});
