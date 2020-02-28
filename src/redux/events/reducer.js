const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS_FETCHED":
      return [...action.payload];
    // case "EVENT_TICKET_FRAUD_CALC":
    //   const newState = state.map(event => {
    //     const eventId =
    //       action.payload.length > 0 ? action.payload[0].eventId : null;
    //     if (event.id === eventId) {
    //       return { ...event, tickets: action.payload };
    //     } else {
    //       return event;
    //     }
    //   });
    //   return newState;
    /*once comment has been created in back-end I return all events with updated nested data.
      Another way could be to only send back the stored comment, but this requires more
      data manipulation in front-end than just using include(comments) with sequelize*/
    case "COMMENT_CREATED":
      console.log("--------------> Stepped into comment created");
      return [...action.payload];
    default:
      return state;
  }
};
