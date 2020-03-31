import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import {
  removeProductFromCart,
  updateItemCart
} from "../../redux/cart/actions";
import "./cart.css";

const useStyles = makeStyles({
  table: {
    minWidth: 550
  }
});

function Cart(props) {
  const classes = useStyles();
  function createData(name, id, quantity, price) {
    return { name, id, quantity, price };
  }
  const data = props.cart.map(cartItem => {
    return createData(
      cartItem.product.title,
      cartItem.product.id,
      cartItem.quantity,
      cartItem.totalPrice
    );
  });

  const updateQuantity = (id, command) => {
    const itemToUpdate = props.cart.filter(
      cartItem => cartItem.product.id === id
    );
    itemToUpdate[0].quantity === 1 && command === "decrease"
      ? alert(
          "You can't decrease the product amount below 1, but you can remove it"
        )
      : props.dispatch(updateItemCart(id, command));
  };

  const calcTotalPrice = cartItems => {
    return cartItems.reduce((acc, cardItem) => {
      return acc + parseInt(cardItem.totalPrice);
    }, 0);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ id, name, quantity, price }) => (
              <TableRow key={name}>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">
                  <i
                    className="arrow left"
                    onClick={() => updateQuantity(id, "decrease")}
                  ></i>
                  {quantity}
                  <i
                    className="arrow right"
                    onClick={() => updateQuantity(id, "increase")}
                  ></i>
                </TableCell>

                <TableCell align="left">{price}</TableCell>
                <TableCell align="right">
                  <Chip
                    color="secondary"
                    label="Remove from cart"
                    onClick={() => props.dispatch(removeProductFromCart(id))}
                  ></Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h5 className="totalPrice">
          Total Price: {calcTotalPrice(props.cart)}
        </h5>
      </TableContainer>
      <Button className="cartButton" variant="contained" href="/">
        Continue Shopping
      </Button>
      <Button className="cartButton" variant="contained" color="primary">
        Checkout
      </Button>
    </Container>
  );
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Cart);
