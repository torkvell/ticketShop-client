import React, { Component } from "react";
import { connect } from "react-redux";
import TicketTable from "./EventTicketTable";
import { Container } from "@material-ui/core";
const getEventId = props => {
  const qs = require("qs");
  return parseInt(
    qs.parse(props.location.search, {
      ignoreQueryPrefix: true
    }).eventId
  );
};
class TicketContainer extends Component {
  toTicketDetailPage = ticketId => {
    this.props.history.push(
      `/ticket/${ticketId}?eventId=${getEventId(this.props)}`
    );
  };
  render() {
    const eventArray = this.props.events.filter(
      event => event.id === getEventId(this.props)
    );
    const ticketArray = eventArray ? eventArray[0].tickets : [];
    const eventName = eventArray ? eventArray[0].name : [];
    console.log("ticket array: ", ticketArray);
    return (
      <Container>
        <TicketTable
          ticketArray={ticketArray}
          eventName={eventName}
          toTicketDetailPage={this.toTicketDetailPage}
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
export default connect(mapStateToProps)(TicketContainer);
