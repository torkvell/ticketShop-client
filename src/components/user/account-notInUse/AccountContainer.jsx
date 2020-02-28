import React, { Component } from "react";
import Drawer from "./Drawer";
import Profile from "./Profile";

export default class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Drawer />
        <Profile />
      </div>
    );
  }
}
