const initialState = {
  id: false,
  email: false,
  token: null,
  tickets: null,
  events: null,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      return { ...state, accountCreated: true };
    case "ERROR":
      return { ...state, error: action.payload };
    case "USER_LOGOUT":
      return { ...initialState };
    case "LOGIN_SUCCESS":
      return {
        ...state,
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
    case "EVENT_CREATED":
      console.log("event created reducer", action.payload);
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case "EVENT_DELETED":
      console.log("event deleted reducer", action.payload);
      const eventIdDeleted = action.payload;
      const updatedEvents = state.events.filter(
        event => event.id !== eventIdDeleted
      );
      return {
        ...state,
        events: updatedEvents
      };
    case "TICKET_CREATED":
      console.log("ticket created reducer", action.payload);
      return {
        ...state,
        tickets: [...state.tickets, action.payload]
      };
    case "TICKET_DELETED":
      console.log("ticket deleted reducer", action.payload);
      const ticketIdDeleted = action.payload;
      const updatedTickets = state.tickets.filter(
        ticket => ticket.id !== ticketIdDeleted
      );
      return {
        ...state,
        tickets: updatedTickets
      };
    case "TICKET_UPDATED":
      console.log("ticket updated reducer", action.payload);
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
    default:
      return state;
  }
};
