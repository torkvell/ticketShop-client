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
    return (
      <div>
        {this.props.user.error ? (
          <div>{this.props.user.error}</div>
        ) : (
          <div></div>
        )}
        <EventTable
          user={this.props.user}
          deleteEvent={this.props.deleteEvent}
          createEvent={this.props.createEvent}
        />
      </div>
    );
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
