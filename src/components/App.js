import Home from './Home';
import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({
  appName: state.appName
})

class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

App = connect(mapStateToProps, () => ({}))(App);

export default App;