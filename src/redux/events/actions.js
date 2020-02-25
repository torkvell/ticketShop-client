import axios from "axios";

export function getAllEvents() {
  return async function(dispatch, getState) {
    const response = await axios.get("http://localhost:4000/event/all");
    console.log(`server response get all events: `, response);
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
