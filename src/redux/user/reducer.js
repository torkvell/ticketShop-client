const initialState = {
  id: false,
  email: false,
  token: null,
  error: null,
  tickets: null,
  events: null
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
    case "GET_ALL_USER_EVENTS":
      return {
        ...state,
        events: action.payload
      };
    case "TICKET_CREATED":
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };
    case "EVENT_CREATED":
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case "TICKET_DELETED":
      console.log("ticket deleted reducer");
      const ticketIdDeleted = action.payload;
      const updatedTickets = state.tickets.filter(
        ticket => ticket.id !== ticketIdDeleted
      );
      return {
        ...state,
        tickets: updatedTickets
      };
    case "TICKET_UPDATED":
      console.log("ticket updated reducer");
      const ticketIdUpdated = action.payload.id;
      const newTicketArray = state.tickets.map(ticket => {
        if (ticket.id === ticketIdUpdated) {
          return action.payload;
        } else {
          return ticket;
        }
      });
      return {
        ...state,
        tickets: newTicketArray
      };
    case "EVENT_DELETED":
      console.log("event deleted reducer");
      const eventIdDeleted = action.payload;
      const updatedEvents = state.events.filter(
        event => event.id !== eventIdDeleted
      );
      return {
        ...state,
        events: updatedEvents
      };
    default:
      return state;
  }
};
