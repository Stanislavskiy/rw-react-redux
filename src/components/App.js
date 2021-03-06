import Header from "./Header";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = state => ({
  appName: state.app.name,
  currentUser: state.auth.currentUser
});

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />

        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

App = connect(
  mapStateToProps,
  () => ({})
)(App);

export default App;
