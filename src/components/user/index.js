// src/components/login
import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/login/actions.js";
class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.dispatch(login(email, password));
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    if (this.props.errorMsg) {
      return (
        //TODO: Create component for login form
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <button type="submit">Login</button>
            </p>
          </form>
          <div>Invalid authentication: {this.props.errorMsg}</div>
        </div>
      );
    }
    return (
      //TODO: Create component for login form
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    errorMsg: reduxState.login.errorMsg,
    accessToken: reduxState.login.accessToken
  };
}

export default connect(mapStateToProps)(Login);
