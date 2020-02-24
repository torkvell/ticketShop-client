import React, { Component } from "react";
import EventTable from "./MyEventTable";
import {
  createEvent,
  deleteEvent,
  getMyEvents
} from "../../../redux/user/actions";
import { connect } from "react-redux";

class MyEventContainer extends Component {
  componentDidMount = () => {
    this.props.getMyEvents(this.props.user.id);
  };

  render() {
    // console.log(`props for ticket table: `, this.props);
    if (!this.props.user.events) {
      return <div>Loading data...</div>;
    } else {
      return (
        <div>
          <EventTable
            user={this.props.user}
            deleteEvent={this.props.deleteEvent}
            createEvent={this.props.createEvent}
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
  createEvent,
  deleteEvent,
  getMyEvents
})(MyEventContainer);
