import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUp, resetAccountCreation } from "../../../redux/user/actions.js";

class SignUpContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.user.accountCreated) {
      setTimeout(() => {
        this.props.history.push("/login");
        this.props.resetAccountCreation();
      }, 2500);
      return (
        <h3>
          You are signed up! Redirecting you to
          <Link to="/login"> login page</Link>
        </h3>
      );
    }
    return (
      <div>
        <SignUpForm
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

export default connect(mapStateToProps, { signUp, resetAccountCreation })(
  SignUpContainer
);
