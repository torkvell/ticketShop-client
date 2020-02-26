import React, { Component } from "react";
import { connect } from "react-redux";
import TicketTable from "../tickets/TicketTable";
import { Container } from "@material-ui/core";
import { getFraudCalculationEventTickets } from "../../redux/events/actions";

const qs = require("qs");

class TicketContainer extends Component {
  componentDidMount = () => {
    const eventId = parseInt(
      qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true
      }).eventId
    );
    this.props.getFraudCalculationEventTickets(eventId);
  };
  render() {
    const eventId = parseInt(
      qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true
      }).eventId
    );
    const eventArray = this.props.events.filter(event => event.id === eventId);
    const ticketArray = eventArray[0].tickets;
    const eventName = eventArray[0].name;
    console.log("ticket array: ", ticketArray);
    return (
      <Container>
        <TicketTable
          ticketArray={ticketArray}
          eventName={eventName}
        ></TicketTable>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    events: reduxState.events
  };
};

export default connect(mapStateToProps, { getFraudCalculationEventTickets })(
  TicketContainer
);
