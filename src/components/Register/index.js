import Spinner from "../Spinner";
import {
  createAccount,
  updateForm,
  registerUnload
} from "../../store/modules/auth";
import { Link } from "react-router";
import { connect } from "react-redux";
import ListErrors from "../ListErrors";
import React from "react";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = dispatch => ({
  onSubmit: fields => dispatch(createAccount(fields)),
  onUpdateForm: (key, value) => dispatch(updateForm(key, value)),
  onUnload: () => dispatch(registerUnload())
});

class Register extends React.Component {
  constructor() {
    super();
    this.updateEmail = e => this.props.onUpdateForm("email", e.target.value);
    this.updateUsername = e =>
      this.props.onUpdateForm("username", e.target.value);
    this.updatePassword = e =>
      this.props.onUpdateForm("password", e.target.value);
    this.submitForm = (username, email, password) => e => {
      e.preventDefault();
      this.props.onSubmit({ username, email, password });
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const { email, password, username, errors, inProgress } = this.props;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="login">Have an account?</Link>
              </p>

              <ListErrors errors={errors} />

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.updateUsername}
                    />
                  </fieldset>

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
                    <Spinner isActive={inProgress} />

                    <button
                      className="btn btn-lg btn-primary pull-xs-right"
                      type="submit"
                      disabled={inProgress}
                    >
                      Sign up
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
