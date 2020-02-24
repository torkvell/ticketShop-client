// src/redux/login/reducer.js
const initialState = { accessToken: null, errorMsg: "" };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/SAVE_ACCESS_TOKEN": {
      // console.log("Redux reducer auth/SAVE_ACCESS_TOKEN " + action.payload);
      return {
        ...state,
        accessToken: action.payload
      };
    }
    case "auth/ERROR": {
      // console.log("Redux reducer auth/SAVE_ACCESS_TOKEN " + action.payload);
      return {
        ...state,
        errorMsg: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
