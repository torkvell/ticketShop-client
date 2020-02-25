import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavBarContainer";
import LoginContainer from "./components/user/login/LoginContainer";
import SignUpContainer from "./components/user/signup/SignUpContainer";
import EventContainer from "./components/events/EventContainer.jsx";
import Ticket from "./components/tickets/";
import Shop from "./components/shop/";
import Cart from "./components/cart/";
import MyTicketContainer from "./components/user/myTickets/MyticketContainer";
import MyEventContainer from "./components/user/myEvents/MyEventContainer";
import "./App.css";
import { getAllEvents } from "./redux/events/actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    this.props.getAllEvents();
  };
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/shop" component={Shop} />
          <Route path="/mytickets" component={MyTicketContainer} />
          <Route path="/myevents" component={MyEventContainer} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/" exact component={EventContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {
  getAllEvents
})(App);
