import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "./Items";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
  removeProductFromCart,
  updateItemCart
} from "../../redux/cart/actions";
import "./cart.css";

export class Cart extends Component {
  removeItemCart = id => {
    this.props.dispatch(removeProductFromCart(id));
  };

  updateQuantity = (id, command) => {
    const itemToUpdate = this.props.cart.filter(
      cartItem => cartItem.product.id === id
    );
    itemToUpdate[0].quantity === 1 && command === "decrease"
      ? alert(
          "You can't decrease the product amount below 1, but you can remove it"
        )
      : this.props.dispatch(updateItemCart(id, command));
  };

  calcTotalPrice = cartItems => {
    return cartItems.reduce((acc, cardItem) => {
      return acc + parseInt(cardItem.totalPrice);
    }, 0);
  };

  render() {
    return (
      <div>
        <Card id="cartWrapper">
          <Card.Header as="h5">Shopping Cart</Card.Header>
          <Card.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cart.map(cartItem => {
                  return (
                    <Items
                      productName={cartItem.product.name}
                      productQuantity={cartItem.quantity}
                      productPrize={cartItem.totalPrice}
                      id={cartItem.product.id}
                      key={cartItem.product.id}
                      removeItemCart={this.removeItemCart}
                      calcQuantity={this.calcQuantity}
                      updateQuantity={this.updateQuantity}
                    />
                  );
                })}
              </tbody>
            </Table>
            <h4>Total Price: {this.calcTotalPrice(this.props.cart)}</h4>
          </Card.Body>
          <Button variant="primary">Checkout</Button>
        </Card>
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
export default connect(mapStateToProps)(Cart);
