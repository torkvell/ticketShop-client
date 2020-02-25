import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/NavBarContainer";
import LoginContainer from "./components/user/login/LoginContainer";
import SignUpContainer from "./components/user/signup/SignUpContainer";
import Homepage from "./components/homepage/";
import Shop from "./components/shop/";
import Cart from "./components/cart/";
import MyTicketContainer from "./components/user/myTickets/MyticketContainer";
import MyEventContainer from "./components/user/myEvents/MyEventContainer";
import "./App.css";

function App() {
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
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
