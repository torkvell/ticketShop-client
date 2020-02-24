import React, { Component } from "./node_modules/react";
import TicketForm from "./MyTicketTable";
import {
  createTicket,
  deleteTicket,
  getMyTickets
} from "../../../redux/user/actions";
import { connect } from "./node_modules/react-redux";

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
          <TicketForm
            user={this.props.user}
            deleteTicket={this.props.deleteTicket}
            createTicket={this.props.createTicket}
            getMyTickets={this.props.getMyTickets}
          />
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
  getMyTickets
})(MyTicketContainer);
