import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from './components/App'; 

/*-----------------------------
  REDUX
-------------------------------*/

const defaultState = {
  appName: 'conduit',
  articles: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ARTICLES': {
      return {
        ...state,
        articles: action.payload
      }
    }
  }
  
  return state;
};

/* eslint-disable */
const store = createStore(
    reducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


/*-----------------------------
  APP
-------------------------------*/

ReactDOM.render(
  (
    <Provider store={store} >
      <App />
    </Provider>
  ), 
  document.getElementById("root")
);