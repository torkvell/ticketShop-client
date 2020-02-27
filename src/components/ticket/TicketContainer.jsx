import React, { Component } from "react";
import { connect } from "react-redux";

const getEventId = props => {
  const qs = require("qs");
  return parseInt(
    qs.parse(props.location.search, {
      ignoreQueryPrefix: true
    }).eventId
  );
};

const constructTicketData = props => {
  //define event data obj which contains the ticket to display
  const eventIdUrl = getEventId(props);
  const eventWithTicket = props.events.reduce((acc, currentEvent) => {
    if (currentEvent.id === eventIdUrl) return currentEvent;
    return acc;
  });
  console.log("eventWithTicket", eventWithTicket);
  //define ticket data obj from tickets array in event data obj
  const ticketIdUrl = parseInt(props.location.pathname.slice(-1));
  const ticketData = eventWithTicket.tickets.reduce((acc, currentTicket) => {
    if (currentTicket.id === ticketIdUrl) {
      console.log("im here");
      return currentTicket;
    }
    return acc;
  });
  console.log("ticketdata constructticketdata", ticketData);
  return ticketData;
};

export class TicketContainer extends Component {
  state = {
    ticketData: null
  };

  componentDidMount = () => {
    this.setState({ ticketData: constructTicketData(this.props) });
  };

  render() {
    if (this.state.ticketData) {
      return (
        <div>
          Ticket Info page!Ticket id:{this.state.ticketData.id}. Ticket title:{" "}
          {this.state.ticketData.title}
        </div>
      );
    } else {
      return <div>Loading..</div>;
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    events: reduxState.events
  };
};

export default connect(mapStateToProps)(TicketContainer);
