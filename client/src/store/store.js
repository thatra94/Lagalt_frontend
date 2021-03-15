import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { userMiddleware } from "./middleware/userMiddleware";

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(userMiddleware))
);
