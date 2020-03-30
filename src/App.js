import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import NavigationBar from "./components/navbar/NavBarContainer.jsx";
import LoginContainer from "./components/user/login/LoginContainer.jsx";
import SignUpContainer from "./components/user/signup/SignUpContainer.jsx";
import EventContainer from "./components/events/EventContainer.jsx";
import EventTicketContainer from "./components/eventTickets/EventTicketContainer.jsx";
import TicketContainer from "./components/ticket/TicketContainer.jsx";
import MyTicketContainer from "./components/user/myTickets/MyTicketContainer.jsx";
import MyEventContainer from "./components/user/myEvents/MyEventContainer.jsx";
import Cart from "./components/cart/";
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
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/mytickets" component={MyTicketContainer} />
          <Route path="/myevents" component={MyEventContainer} />
          <Route path="/eventTickets/" component={EventTicketContainer} />
          <Route path="/ticket/" component={TicketContainer} />
          <Route path="/" exact component={EventContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {
  getAllEventData
})(App);
