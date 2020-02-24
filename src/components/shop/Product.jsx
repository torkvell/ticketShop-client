import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class Product extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Price: {this.props.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="primary"
            onClick={() => this.props.addToCart(this.props.id)}
          >
            Buy now
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
