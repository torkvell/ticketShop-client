import React, { Component } from "react";
import TicketForm from "./MyTicketTable";
import {
  updateTicket,
  createTicket,
  deleteTicket,
  getMyTickets
} from "../../../redux/user/actions";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

class MyTicketContainer extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getMyTickets(this.props.user.id);
  };

  render() {
    console.log(`props for my ticket container: `, this.props);
    return (
      <div>
        <Container>
          {this.props.user.error ? (
            <div>{this.props.user.error}</div>
          ) : (
            <div></div>
          )}
          <div></div>
          <TicketForm
            user={this.props.user}
            deleteTicket={this.props.deleteTicket}
            createTicket={this.props.createTicket}
            updateTicket={this.props.updateTicket}
            events={this.props.events}
          />
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
