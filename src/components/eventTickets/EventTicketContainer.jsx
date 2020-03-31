import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import TicketTable from "./EventTicketTable";
import { getEventId } from "../../utils/";

const TicketContainer = props => {
  const toTicketDetailPage = ticketId => {
    props.history.push(
      `/ticket?ticketId=${ticketId}&eventId=${getEventId({
        queryString: props.location.search
      })}`
    );
  };
  const eventArray = props.events.filter(
    event => event.id === getEventId({ queryString: props.location.search })
  );
  const { tickets, name } = eventArray
    ? eventArray[0]
    : { tickets: [], name: [] };
  return (
    <Container>
      <TicketTable
        tickets={tickets}
        eventName={name}
        toTicketDetailPage={toTicketDetailPage}
      ></TicketTable>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
export default connect(mapStateToProps)(TicketContainer);
