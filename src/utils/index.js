import qs from "qs";

export const getEventId = ({ queryString }) => {
  return parseInt(
    qs.parse(queryString, {
      ignoreQueryPrefix: true
    }).eventId
  );
};
