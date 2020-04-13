import React, { Component } from "react";
import { connect } from "react-redux";
import TicketForm from "./MyTicketTable";
import {
  updateTicket,
  createTicket,
  deleteTicket,
  getMyTickets
} from "../../../redux/user/actions";
import { Container } from "@material-ui/core";

class MyTicketContainer extends Component {
  componentDidMount = () => {
    this.props.getMyTickets(this.props.user.id);
  };

  render() {
    const { ...ticketContainerProps } = this.props;
    return (
      <div>
        <Container>
          {this.props.user.error ? (
            <div>{this.props.user.error}</div>
          ) : (
            <div></div>
          )}
          <TicketForm {...ticketContainerProps} />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user,
    events: reduxState.events
  };
}

export default connect(mapStateToProps, {
  createTicket,
  deleteTicket,
  getMyTickets,
  updateTicket
})(MyTicketContainer);
