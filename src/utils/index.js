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
