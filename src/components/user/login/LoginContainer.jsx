import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { logIn } from "../../../redux/user/actions.js";
import { Redirect } from "react-router";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user.token) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <LoginForm
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logIn })(LoginContainer);
