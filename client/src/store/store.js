import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { userMiddleware } from "./middleware/userMiddleware";
import { projectsOverviewMiddleware } from "./middleware/projectsOverviewMiddleware";
import { projectMiddleware } from "./middleware/projectMiddleware";
import { commentMiddleware } from "./middleware/commentMiddleware";
import { userProjectsMiddleware } from "./middleware/userProjectsMiddleware";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(userMiddleware,projectsOverviewMiddleware,projectMiddleware,commentMiddleware, userProjectsMiddleware))
);
