import qs from "qs";

export const getEventId = ({ queryString }) => {
  return parseInt(
    qs.parse(queryString, {
      ignoreQueryPrefix: true
    }).eventId
  );
};

export const getTicketId = ({ queryString }) => {
  return parseInt(
    qs.parse(queryString, {
      ignoreQueryPrefix: true
    }).ticketId
  );
};

export const findEvent = (state, eventId) =>
  state.find(event => event.id === eventId);

export const filterOutEvent = (state, eventId) =>
  state.filter(event => event.id !== eventId);
