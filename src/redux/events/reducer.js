const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS_FETCHED":
      return [...action.payload];
    /*once comment has been created in back-end I return all events with all its nested data(events-->tickets-->comments).
      Another way could be to only send back the stored comment, but this requires more
      data manipulation in front-end than just using include(ticket & comments) with sequelize*/
    case "COMMENT_CREATED":
      console.log("reducer comment created");
      return [...action.payload];
    default:
      return state;
  }
};
