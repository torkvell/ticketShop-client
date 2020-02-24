export function addProductToCart(product) {
  return function thunk(dispatch, getState) {
    dispatch(addProduct(product));
  };
}

function addProduct(product) {
  return {
    type: "ADD_PRODUCT_CART",
    payload: product
  };
}

export function removeProductFromCart(productId) {
  return {
    type: "REMOVE_PRODUCT_CART",
    payload: productId
  };
}

export function updateItemCart(id, command) {
  return {
    type: "UPDATE_PRODUCT_CART",
    payload: { id, command }
  };
}
