const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS_FETCHED":
      return [...action.payload];
    default:
      return state;
  }
};