import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { userMiddleware } from "./middleware/userMiddleware";
import { projectsOverviewMiddleware } from "./middleware/projectsOverviewMiddleware";
import { projectMiddleware } from "./middleware/projectMiddleware";


export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(userMiddleware,projectsOverviewMiddleware,projectMiddleware))
);
