import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function signUpSuccess(data) {
  return { type: "USER_CREATED", payload: data };
}
function errorHandler(data) {
  return { type: "ERROR", payload: data };
}

function loginSuccess(data) {
  return {
    type: "LOGIN_SUCCESS",
    payload: data //TOCHECK: Should we do destructuring here of data?
  };
}

function logOutSuccess() {
  return { type: "USER_LOGOUT" };
}

export function signUp(email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user/create", {
      email: email,
      password: password
    });
    console.log(`server response: `, response);
    if (!response.data.error) {
      dispatch(signUpSuccess(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

export function logIn(email, password) {
  console.log(`thunk for log in activated`);
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user/login", {
      email,
      password
    });
    console.log(`server response: `, response);
    if (!response.data.error) {
      dispatch(loginSuccess(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

export function logOut() {
  return async function(dispatch) {
    dispatch(logOutSuccess());
  };
}
