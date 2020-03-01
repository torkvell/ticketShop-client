import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/user/actions.js";
import AppBarNav from "./AppBarNav";
import { withRouter } from "react-router";

class NavBar extends Component {
  render() {
    return (
      <AppBarNav
        cart={this.props.cart}
        user={this.props.user}
        logOut={() => {
          this.props.logOut();
          this.props.history.push("/");
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cart: state.cart
  };
}

//TODO: Check if it's necessary with withRouter. There should be a way to pass the history prop from browserrouter
export default withRouter(connect(mapStateToProps, { logOut })(NavBar));
