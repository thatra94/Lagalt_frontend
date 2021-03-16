import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { userMiddleware } from "./middleware/userMiddleware";
import { projectsMiddleware } from "./middleware/projectsMiddleware";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(userMiddleware,projectsMiddleware))
);
