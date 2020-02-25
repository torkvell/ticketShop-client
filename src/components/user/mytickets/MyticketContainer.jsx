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
    // console.log(`props for ticket table: `, this.props);
    if (!this.props.user.tickets) {
      return <div>Loading data...</div>;
    } else {
      return (
        <div>
          <Container>
            <TicketForm
              user={this.props.user}
              deleteTicket={this.props.deleteTicket}
              createTicket={this.props.createTicket}
              updateTicket={this.props.updateTicket}
            />
          </Container>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user
  };
}

export default connect(mapStateToProps, {
  createTicket,
  deleteTicket,
  getMyTickets,
  updateTicket
})(MyTicketContainer);
