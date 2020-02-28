import axios from "axios";

export function getAllEventData() {
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

// export function getFraudCalculationEventTickets(eventId) {
//   return async function(dispatch, getState) {
//     const response = await axios.get(
//       `http://localhost:4000/ticket/all/${eventId}`
//     );
//     console.log(`server response event tickets fraud calc: `, response);
//     if (!response.data.error) {
//       dispatch(eventTicketFraudCalc(response.data));
//     } else {
//       dispatch(errorHandler(response.data));
//     }
//   };
// }
// function eventTicketFraudCalc(data) {
//   return { type: "EVENT_TICKET_FRAUD_CALC", payload: data };
// }

function errorHandler(data) {
  return { type: "ERROR", payload: data };
}
