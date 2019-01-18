import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./modules/app";
import { articlesReducer } from "./modules/articles";
import { authReducer } from "./modules/auth";

const reducer = combineReducers({
  app: appReducer,
  articles: articlesReducer,
  auth: authReducer
});

/* eslint-disable */
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
/* eslint-enable */

export default store;
