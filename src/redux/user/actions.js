import axios from "axios";

/*--------------------SIGN UP--------------------*/

export function signUp(firstName, lastName, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user/create", {
      firstName,
      lastName,
      email,
      password
    });
    console.log(`server response sign up: `, response);
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

/*--------------------LOGIN--------------------*/

export function logIn(email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user/login", {
      email,
      password
    });
    console.log(`server response login: `, response);
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

/*--------------------LOGOUT--------------------*/

export function logOut() {
  return async function(dispatch) {
    dispatch(logOutSuccess());
  };
}

function logOutSuccess() {
  return { type: "USER_LOGOUT" };
}

/*--------------------MY TICKETS--------------------*/

export function getMyTickets(userId) {
  console.log(`thunk get my tickets. userId: ${userId}`);
  return async function(dispatch, getState) {
    const response = await axios.get(
      `http://localhost:4000/ticket/user/${userId}`
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

export function createTicket(
  title,
  description,
  price,
  imageURL,
  userId,
  eventId,
  token
) {
  return async function(dispatch, getState) {
    const response = await axios.post(
      "http://localhost:4000/ticket/create",
      {
        title,
        description,
        price,
        imageURL,
        userId,
        eventId
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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
  return async function(dispatch, getState) {
    const response = await axios.post(
      "http://localhost:4000/ticket/delete",
      {
        id
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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

export function updateTicket(
  id,
  title,
  description,
  price,
  imageUrl,
  eventId,
  token
) {
  return async function(dispatch, getState) {
    const response = await axios.put(
      `http://localhost:4000/ticket/update/${id}`,
      {
        title,
        description,
        price,
        imageUrl,
        eventId
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`server response update ticket: `, response);
    if (!response.data.error) {
      dispatch(ticketUpdated(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function ticketUpdated(data) {
  return { type: "TICKET_UPDATED", payload: data };
}

/*--------------------MY EVENTS--------------------*/

export function getMyEvents(userId) {
  return async function(dispatch, getState) {
    const response = await axios.get(
      `http://localhost:4000/event/all/${userId}`
    );
    console.log(`server response get user events: `, response);
    if (!response.data.error) {
      dispatch(updateUserEvents(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function updateUserEvents(data) {
  return { type: "GET_ALL_USER_EVENTS", payload: data };
}

export function createEvent(
  name,
  imageUrl,
  startDate,
  endDate,
  description,
  userId,
  token
) {
  return async function(dispatch, getState) {
    const response = await axios.post(
      "http://localhost:4000/event/create",
      {
        name,
        imageUrl,
        startDate,
        endDate,
        description,
        userId
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`server response create event: `, response);
    if (!response.data.error) {
      dispatch(eventCreated(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function eventCreated(data) {
  return { type: "EVENT_CREATED", payload: data };
}

export function deleteEvent(id, token) {
  return async function(dispatch, getState) {
    const response = await axios.post(
      "http://localhost:4000/event/delete",
      {
        id
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`server response delete event: `, response);
    if (!response.data.error) {
      dispatch(eventDeleted(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function eventDeleted(data) {
  return { type: "EVENT_DELETED", payload: data };
}

// export function getPublicUserData(userId) {
//   return async function(dispatch, getState) {
//     console.log(`thunk get pub data`, userId);
//     const response = await axios.get(
//       `http://localhost:4000/user/public/${userId}`
//     );
//     console.log(`server response public user data: `, response);
//     if (!response.data.error) {
//       dispatch(publicUserData(response.data));
//     } else {
//       dispatch(errorHandler(response.data));
//     }
//   };
// }

// function publicUserData(data) {
//   return { type: "TICKET_USER_DATA_PUBLIC", payload: data };
// }

/*--------------------ERROR HANDLING--------------------*/

function errorHandler(data) {
  return { type: "ERROR", payload: data };
}
