import React, { Component } from "react";
import { connect } from "react-redux";
import TicketCard from "./TicketCard";
import { Container } from "@material-ui/core";

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
        <Container>
          <TicketCard ticketData={this.state.ticketData}></TicketCard>
        </Container>
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
