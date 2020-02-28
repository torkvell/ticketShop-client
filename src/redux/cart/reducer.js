// src/store/developers/reducer.js
const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_CART": {
      const product = action.payload;
      console.log(`product`, product);
      const isInCart = state.some(
        cartItem => cartItem.product.id === product.id
      );
      if (!isInCart) {
        const newState = [
          ...state,
          { product: product, quantity: 1, totalPrice: product.price }
        ];
        return newState;
      } else {
        const updatedCart = state.map(cartItem =>
          cartItem.product.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: cartItem.product.price * (cartItem.quantity + 1)
              }
            : cartItem
        );
        return updatedCart;
      }
    }
    case "REMOVE_PRODUCT_CART": {
      const productToRemove = action.payload;
      const filteredCart = state.filter(
        cartItem => cartItem.product.id !== productToRemove
      );
      // console.log("Filtered cart: ", filteredCart);
      return filteredCart;
    }
    case "UPDATE_PRODUCT_CART": {
      const productId = action.payload.id;
      const command = action.payload.command;
      const updatedCart = state.map(cartItem =>
        cartItem.product.id === productId
          ? command === "increase"
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: cartItem.product.price * (cartItem.quantity + 1)
              }
            : {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                totalPrice: cartItem.product.price * (cartItem.quantity - 1)
              }
          : cartItem
      );
      return updatedCart;
    }
    default: {
      return state;
    }
  }
}
