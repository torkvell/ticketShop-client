import React, { Component } from "react";
import { Container } from "@material-ui/core";
import EventCard from "./EventCard.js";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paginator from "./Paginator";
import { makeStyles } from "@material-ui/core/styles";

class EventContainer extends Component {
  state = {
    events: [],
    currentPage: 1
  };

  //Change pagination page -> called from pagination.js
  paginate = (event, value) => {
    this.setState({ currentPage: value });
  };

  render() {
    const paginatorStyle = {
      marginTop: "30x",
      marginBottom: "30px"
    };
    const gridWrapperStyle = {
      marginBottom: "30px"
    };

    const eventsPerPage = 9;
    const indexOfLastEvent = this.state.currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    /*Here I slice the events array based on the const above. Once the currentPage changes in state 
    the slice method will provide a new array of events and give it to EventCard component*/
    const currentEvents = this.props.events
      ? this.props.events.slice(indexOfFirstEvent, indexOfLastEvent)
      : [];
    return (
      <Container>
        <Grid
          style={gridWrapperStyle}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <EventCard events={currentEvents}></EventCard>
        </Grid>
        <Grid container spacing={3} justify="center" style={paginatorStyle}>
          <Paginator
            eventsPerPage={eventsPerPage}
            totalEvents={this.props.events ? this.props.events.length : 0}
            paginate={this.paginate}
          ></Paginator>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(EventContainer);
