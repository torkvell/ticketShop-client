const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS_FETCHED":
      return [...action.payload];
    case "EVENT_TICKET_FRAUD_CALC":
      const newState = state.map(event => {
        const eventId =
          action.payload.length > 0 ? action.payload[0].eventId : null;
        if (event.id === eventId) {
          return { ...event, tickets: action.payload };
        } else {
          return event;
        }
      });
      return newState;
    default:
      return state;
  }
};
