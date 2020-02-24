import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export default class Cart extends Component {
  render() {
    const productId = this.props.id;
    return (
      <tr>
        <td> {this.props.productName}</td>
        <td>
          <i
            class="arrow left"
            onClick={() => this.props.updateQuantity(productId, "decrease")}
          ></i>
          {this.props.productQuantity}
          <i
            class="arrow right"
            onClick={() => this.props.updateQuantity(productId, "increase")}
          ></i>
        </td>
        <td>{this.props.productPrize}</td>
        <td>
          <Badge
            pill
            variant="danger"
            onClick={() => this.props.removeItemCart(this.props.id)}
          >
            X
          </Badge>
        </td>
      </tr>
    );
  }
}
