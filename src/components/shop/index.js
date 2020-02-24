import React, { Component } from "react";
import { connect } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import { fetchProducts, searchProduct } from "../../redux/shop/actions";
import { addProductToCart } from "../../redux/cart/actions";
import Product from "./Product";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./shop.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Shop extends Component {
  state = { searchText: "" };
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  addToCart = id => {
    const product = this.props.products.filter(product => product.id === id);
    this.props.dispatch(addProductToCart(product));
  };
  handleChange = event => {
    this.setState(
      {
        searchText: event.target.value
      },
      () => {
        this.props.dispatch(searchProduct(this.state.searchText));
      }
    );
  };

  render() {
    const products = this.props.products;
    return (
      <div>
        <Container>
          <h1>Shop</h1>
          <div class="filterShop">
            <Card>
              <Card.Header>
                <h4 className="headerFilters">Filters</h4>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.searchText}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control as="select">
                        <option>Category</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Card.Header>
            </Card>
          </div>
          <CardDeck>
            {products.map(product => {
              return (
                <Product
                  title={product.name}
                  img={product.imageUrl}
                  price={product.price}
                  key={product.id}
                  id={product.id}
                  addToCart={this.addToCart}
                />
              );
            })}
            ;
          </CardDeck>
        </Container>
      </div>
    );
  }
}

//Connect component to redux state
function mapStateToProps(reduxState) {
  return {
    products: reduxState.shop.products,
    cart: reduxState.shop.cart
  };
}
export default connect(mapStateToProps)(Shop);
