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
  return state;
};

const store = createStore(reducer, defaultState);

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