import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./modules/app";
import { articlesReducer } from "./modules/articles";

const reducer = combineReducers({
  app: appReducer,
  articles: articlesReducer,
});

  return state;
};

/* eslint-disable */
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
  ),
);
/* eslint-enable */

export default store;
