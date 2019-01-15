import Banner from "../Banner";
import MainView from "../MainView";
import React from "react";
import { connect } from "react-redux";
import { getArticles } from "../../api";

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "UPDATE_ARTICLES", payload })
});

class Home extends React.Component {
  componentWillMount() {
    getArticles().then(data => {
      this.props.onLoad(data);
    });
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;
