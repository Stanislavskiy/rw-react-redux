import React from "react";
import { connect } from "react-redux";
import { login, updateForm, loginUnload } from "../../store/modules/auth";
import loadingSVG from "../../assets/svg/loading.svg";
import "./style.css";
import ListErrors from "../ListErrors";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = dispatch => ({
  onLogin: credentials => dispatch(login(credentials)),
  onUpdateForm: (key, value) => dispatch(updateForm(key, value)),
  onUnload: () => dispatch(loginUnload())
});

class Login extends React.Component {
  constructor() {
    super();
    this.updateEmail = e => this.props.onUpdateForm("email", e.target.value);
    this.updatePassword = e =>
      this.props.onUpdateForm("password", e.target.value);
    this.submitForm = (email, password) => e => {
      e.preventDefault();
      this.props.onLogin({ email, password });
    };
  }
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const { email, password, inProgress, errors } = this.props;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a>Need an account?</a>
              </p>
              <ListErrors errors={errors} />
              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.updateEmail}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.updatePassword}
                    />
                  </fieldset>
                  <div className="pull-xs-right">
                    {inProgress ? <img className="loading" src={loadingSVG} alt="loading" /> : ''}
                    <button className="btn btn-lg btn-primary" type="submit">
                      Sign in
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;
