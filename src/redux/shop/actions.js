// src/redux/shop/actions.js
export function fetchProducts() {
  return function thunk(dispatch, getState) {
    fetch("http://localhost:4000/shop/products")
      .then(response => response.json())
      .then(data => {
        dispatch(setProducts(data));
      });
  };
}

function setProducts(data) {
  return {
    type: "products/FETCHED",
    payload: data
  };
}

export function searchProduct(text) {
  return {
    type: "FILTER_SEARCH_PRODUCT",
    payload: text
  };
}
