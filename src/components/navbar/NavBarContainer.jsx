import React, { Component } from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/user/actions.js";
import MaterialUInav from "./MaterialUInav";
import { withRouter } from "react-router";

class NavBar extends Component {
  render() {
    return (
      <MaterialUInav
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
    user: state.user
  };
}

//TODO: Check if it's necessary with withRouter. There should be a way to pass the history prop from browserrouter
export default withRouter(connect(mapStateToProps, { logOut })(NavBar));
