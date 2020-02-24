const initialState = {
  userLoggedIn: false,
  id: false,
  email: false,
  token: null,
  error: null,
  accountCreated: false,
  tickets: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      return { ...state, accountCreated: true };
    case "ERROR":
      const errorMsg = action.payload.message;
      return { ...state, error: errorMsg };
    case "USER_LOGOUT":
      return { ...initialState };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userLoggedIn: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token
      };
    case "GET_ALL_USER_TICKETS":
      return {
        ...state,
        tickets: action.payload
      };
    case "TICKET_CREATED":
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };
    case "TICKET_DELETED":
      const ticketIdDeleted = action.payload;
      const updatedTickets = state.tickets.filter(
        ticket => ticket.id !== ticketIdDeleted
      );
      return {
        ...state,
        tickets: updatedTickets
      };
    default:
      return state;
  }
};
