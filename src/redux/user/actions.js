import axios from "axios";

function errorHandler(data) {
  return { type: "ERROR", payload: data };
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

function signUpSuccess(data) {
  return { type: "USER_CREATED", payload: data };
}

export function logIn(email, password) {
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

function loginSuccess(data) {
  return {
    type: "LOGIN_SUCCESS",
    payload: data //TOCHECK: Should we do destructuring here of data?
  };
}

export function logOut() {
  return async function(dispatch) {
    dispatch(logOutSuccess());
  };
}

function logOutSuccess() {
  return { type: "USER_LOGOUT" };
}

export function getMyTickets(userId) {
  return async function(dispatch, getState) {
    const response = await axios.get(
      `http://localhost:4000/ticket/all/${userId}`
    );
    console.log(`server response get user tickets: `, response);
    if (!response.data.error) {
      dispatch(updateUserTickets(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function updateUserTickets(data) {
  return { type: "GET_ALL_USER_TICKETS", payload: data };
}

export function createTicket(description, price, imageURL, userId, token) {
  console.log(
    `inside thunk for create ticket`,
    description,
    price,
    imageURL,
    token,
    userId
  );
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/ticket/create", {
      description: description,
      price: price,
      imageURL: imageURL,
      token,
      userId
    });
    console.log(`server response create ticket: `, response);
    if (!response.data.error) {
      dispatch(ticketCreated(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function ticketCreated(data) {
  return { type: "TICKET_CREATED", payload: data };
}

export function deleteTicket(id, token) {
  console.log(`inside thunk for delete ticket`, id, token);
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/ticket/delete", {
      id,
      token
    });
    console.log(`server response delete ticket: `, response);
    if (!response.data.error) {
      dispatch(ticketDeleted(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function ticketDeleted(data) {
  return { type: "TICKET_DELETED", payload: data };
}
