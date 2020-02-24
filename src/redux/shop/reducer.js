// src/store/developers/reducer.js
const initialState = { products: [], cart: [] };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "products/FETCHED": {
      return {
        ...state,
        products: [...action.payload]
      };
    }
    case "FILTER_SEARCH_PRODUCT": {
      console.log("Reducer filter search: ", action.payload);
      // return {
      //   ...state,
      //   products: [...action.payload]
      // };
    }
    default: {
      return state;
    }
  }
}
