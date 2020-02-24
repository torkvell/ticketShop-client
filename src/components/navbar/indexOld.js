import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./navbar.css";
import { connect } from "react-redux";

export class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>WebShop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link path="/" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#shop">
              <Link to="/shop">Shop</Link>
            </Nav.Link>
            <Nav.Link className="navBarLogin" href="#login">
              <Link to="/login">Log in</Link>
            </Nav.Link>
            <Nav.Link className="navBarSignUp" href="#login">
              <Link to="/signup">Sign up</Link>
            </Nav.Link>
            <Nav.Link className="navBarCart" href="#cart">
              <Link to="/cart">
                <img className="icon-shopping" src="./icon-shop.png" />
              </Link>
              {this.props.cart.length !== 0
                ? this.props.cart.reduce(
                    (acc, cartItem) => cartItem.quantity + acc,
                    0
                  )
                : 0}
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

//Connect component to redux state
function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}
export default connect(mapStateToProps)(NavigationBar);
