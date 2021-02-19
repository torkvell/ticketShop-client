import axios from "axios";
const serverUrl = "https://ticket-shop-server.herokuapp.com";
//const serverUrl = "http://localhost:4000";

/*--------------------SIGN UP--------------------*/

export function signUp(firstName, lastName, email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${serverUrl}/user/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      // Success 🎉
      dispatch(signUpSuccess(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function signUpSuccess(data) {
  return { type: "USER_CREATED", payload: data };
}

/*--------------------LOGIN--------------------*/

export function logIn(email, password) {
  return async function (dispatch, getState) {
    try {
      const response = await axios.post(`${serverUrl}/user/login`, {
        email,
        password,
      });
      // Success 🎉
      dispatch(loginSuccess(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function loginSuccess(data) {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
}

/*--------------------LOGOUT--------------------*/

export function logOut() {
  return async function (dispatch) {
    dispatch(logOutSuccess());
  };
}

function logOutSuccess() {
  return { type: "USER_LOGOUT" };
}

/*--------------------MY TICKETS--------------------*/

export function getMyTickets(userId) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${serverUrl}/user/${userId}/ticket`);
      // Success 🎉
      dispatch(updateUserTickets(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
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
  imageUrl,
  eventId,
  token
) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${serverUrl}/ticket/`,
        {
          title,
          description,
          price,
          imageUrl,
          eventId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Success 🎉
      dispatch(ticketCreated(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function ticketCreated(data) {
  return { type: "TICKET_CREATED", payload: data };
}

export function deleteTicket(ticketId, token) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${serverUrl}/ticket/${ticketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Success 🎉
      dispatch(ticketDeleted(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function ticketDeleted(data) {
  return { type: "TICKET_DELETED", payload: data };
}

export function updateTicket(
  ticketId,
  title,
  description,
  price,
  imageUrl,
  eventId,
  token
) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `${serverUrl}/ticket/${ticketId}`,
        {
          title,
          description,
          price,
          imageUrl,
          eventId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Success 🎉
      dispatch(ticketUpdated(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function ticketUpdated(data) {
  return { type: "TICKET_UPDATED", payload: data };
}

/*--------------------MY EVENTS--------------------*/

export function getMyEvents(userId) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${serverUrl}/user/${userId}/event`);
      // Success 🎉
      dispatch(updateUserEvents(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
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
  token
) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${serverUrl}/event/`,
        {
          name,
          imageUrl,
          startDate,
          endDate,
          description,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Success 🎉
      dispatch(eventCreated(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function eventCreated(data) {
  return { type: "EVENT_CREATED", payload: data };
}

export function deleteEvent(eventId, token) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`${serverUrl}/event/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Success 🎉
      dispatch(eventDeleted(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}

function eventDeleted(data) {
  return { type: "EVENT_DELETED", payload: data };
}

/*--------------------USER COMMENT--------------------*/

export function postComment(comment, ticketId, userId, token) {
  return async function (dispatch) {
    try {
      console.log(
        `comment: ${comment} ticketId: ${ticketId} userId: ${userId} token: ${token}`
      );
      const response = await axios.post(
        `${serverUrl}/comment/${ticketId}`,
        { comment, ticketId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Success 🎉
      dispatch(newTicketComment(response.data));
      dispatch(errorHandler(null));
    } catch (error) {
      // Error 😨
      if (error.response) {
        dispatch(errorHandler(error.response.data));
      } else if (error.request) {
        dispatch(
          errorHandler(
            "Something went wrong. The request was made but no response from server was received"
          )
        );
      } else {
        dispatch(errorHandler(`Something went wrong: ${error.message}`));
      }
    }
  };
}
function newTicketComment(data) {
  return { type: "COMMENT_CREATED", payload: data };
}

/*--------------------ERROR HANDLING--------------------*/

function errorHandler(data) {
  return { type: "ERROR", payload: data };
}

/*--------------------ACCOUNT CREATION--------------------*/

export function resetAccountCreation() {
  return async function (dispatch) {
    dispatch({ type: "RESET_ACCOUNT_CREATION" });
  };
}
