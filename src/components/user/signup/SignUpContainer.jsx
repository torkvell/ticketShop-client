import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUp } from "../../../redux/user/actions.js";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

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
      //TODO: Redirect to user's home page to confirm login
      setTimeout(() => {
        this.props.history.push("/login");
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

export default connect(mapStateToProps, { signUp })(SignUpContainer);
