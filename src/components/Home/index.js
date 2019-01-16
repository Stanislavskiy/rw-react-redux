import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import { connect } from "react-redux";
import { loadArticles } from "../../store/modules/articles";

const mapStateToProps = state => ({
  appName: state.app.name
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(loadArticles())
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad();
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
