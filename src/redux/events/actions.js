import axios from "axios";
// const serverUrl = "https://ticket-shop-server.herokuapp.com";
const serverUrl = "http://localhost:4000";

export function getAllEventData() {
  return async function (dispatch) {
    const response = await axios.get(`${serverUrl}/event`);
    if (!response.data.error) {
      dispatch(eventsFethed(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}

function eventsFethed(data) {
  return { type: "ALL_EVENTS_FETCHED", payload: data };
}

function errorHandler(data) {
  return { type: "ERROR", payload: data };
}
