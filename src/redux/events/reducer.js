const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_EVENTS_FETCHED":
      return [...action.payload];
    case "COMMENT_CREATED":
      return [...action.payload];
    case "EVENT_CREATED":
      const newEvent = { ...action.payload, tickets: [] };
      return [...state, newEvent];
    case "EVENT_DELETED":
      const deletedEventId = action.payload;
      const newState = state.filter((event) => event.id !== deletedEventId);
      return newState;
    case "TICKET_CREATED":
      const eventToUpdate = state.find(
        (event) => event.id === action.payload.eventId
      );
      const allOtherEvents = state.filter(
        (event) => event.id !== action.payload.eventId
      );
      const ticket = { ...action.payload, comments: [] };
      //append new ticket to the corresponding event
      const newEventTickets = [...eventToUpdate.tickets, ticket];
      const updatedEvent = { ...eventToUpdate, tickets: newEventTickets };
      //append updated event to state
      const newEvents = [...allOtherEvents, updatedEvent];
      console.log("reducer new ticket:", newEvents);
      return newEvents;
    case "TICKET_DELETED":
      const deletedTicketId = action.payload;
      const newEventArray = state.map((event) => {
        const ticket = event.tickets.find((ticket) =>
          ticket.id === deletedTicketId ? true : false
        );
        if (ticket) {
          //remove deleted ticket from the corresponding event
          const newTickets = event.tickets.filter(
            (ticket) => ticket.id !== deletedTicketId
          );
          //append filtered ticket array to corresponding event
          const newEvent = { ...event, tickets: newTickets };
          return newEvent;
        } else {
          return event;
        }
      });
      return newEventArray;
    case "TICKET_UPDATED":
      const updatedTicket = action.payload;
      const updatedState = state.map((event) => {
        const ticket = event.tickets.find((ticket) =>
          ticket.id === updatedTicket.id ? true : false
        );
        if (ticket) {
          //remove ticket that has been updated from the corresponding event ticket array
          const filteredTickets = event.tickets.filter(
            (ticket) => ticket.id !== updatedTicket.id
          );
          const newTickets = [...filteredTickets, updatedTicket];
          //append updated ticket array to corresponding event
          const newEvent = { ...event, tickets: newTickets };
          return newEvent;
        } else {
          return event;
        }
      });
      return updatedState;
    default:
      return state;
  }
};
