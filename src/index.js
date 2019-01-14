import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

/*-----------------------------
  REDUX
-------------------------------*/

const defaultState = {
  checked:false,
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        checked: !state.checked
      }
    }
  }
}

const store = createStore(reducer, defaultState);

/*-----------------------------
  APP
-------------------------------*/

class App extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'));
