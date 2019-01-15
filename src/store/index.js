import { createStore } from "redux";

const initialState = {
  appName: "conduit",
  articles: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ARTICLES": {
      return {
        ...state,
        articles: action.payload
      };
    }
  }

  return state;
};

/* eslint-disable */
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;