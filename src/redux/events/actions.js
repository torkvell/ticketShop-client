import axios from "axios";

export function getAllEventData() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:4000/event");
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
