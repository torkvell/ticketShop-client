import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./components/navbar/NavBarContainer";
import LoginContainer from "./components/user/login/LoginContainer";
import SignUpContainer from "./components/user/signup/SignUpContainer";
import EventContainer from "./components/events/EventContainer";
import EventTicketContainer from "./components/eventTickets/EventTicketContainer";
import TicketContainer from "./components/ticket/TicketContainer";
import MyEventContainer from "./components/user/myEvents/MyEventContainer";
import MyTicketContainer from "./components/user/mytickets/MyticketContainer";
import Cart from "./components/cart/";
import Checkout from "./components/checkout/";
import { getAllEventData } from "./redux/events/actions";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    this.props.getAllEventData();
  };
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={EventContainer} />
          <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
          <Route path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginContainer} />
          <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUpContainer} />
          <Route path={`${process.env.PUBLIC_URL}/mytickets`} component={MyTicketContainer} />
          <Route path={`${process.env.PUBLIC_URL}/myevents`} component={MyEventContainer} />
          <Route path={`${process.env.PUBLIC_URL}/eventTickets`} component={EventTicketContainer} />
          <Route path={`${process.env.PUBLIC_URL}/ticket`} component={TicketContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {
  getAllEventData
})(App);
