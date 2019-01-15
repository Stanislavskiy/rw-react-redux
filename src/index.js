import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from './components/App'; 

ReactDOM.render(
  (
    <Provider store={store} >
      <App />
    </Provider>
  ), 
  document.getElementById("root")
);