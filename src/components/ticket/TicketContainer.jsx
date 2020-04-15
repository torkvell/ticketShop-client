import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { postComment } from "../../redux/user/actions";
import { addProductToCart } from "../../redux/cart/actions";
import { getEventId, getTicketId } from "../../utils/";
import TicketCardMobile from "./TicketCardMobile";
import TicketCardDesktop from "./TicketCardDesktop";

const constructTicketData = (props) => {
  //define event data obj which contains the ticket to display
  const eventIdUrl = getEventId({
    queryString: props.location.search,
  });
  const eventWithTicket = props.events.find(
    (currentEvent) => currentEvent.id === eventIdUrl
  );
  //define ticket data obj from tickets array in event data obj
  const ticketIdUrl = getTicketId({
    queryString: props.location.search,
  });
  const ticketData = eventWithTicket.tickets.find(
    (currentTicket) => currentTicket.id === ticketIdUrl
  );
  return ticketData;
};

export class TicketContainer extends Component {
  state = {
    ticketData: null,
    comment: "",
    width: window.innerWidth,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { comment, ticketData } = this.state;
    const { id: userId, token } = this.props.user;
    event.preventDefault();
    if (!this.props.user.token) {
      alert("You must be logged in to post comments");
      return;
    }
    this.props.postComment(comment, ticketData.id, userId, token);
    this.setState({ comment: "" });
  };

  throttleHandleResize = () => { 
    setTimeout(this.setState({width: window.innerWidth}), 1000)
  }

  componentDidMount = () => {
    this.setState({ ticketData: constructTicketData(this.props) });
    window.addEventListener('resize', this.throttleHandleResize)
    return () => {
      window.removeEventListener('resize', this.throttleHandleResize)
    }
  };

  componentDidUpdate(prevProps) {
    const prevTicketData = constructTicketData(prevProps);
    const newTicketData = constructTicketData(this.props);
    if (newTicketData.comments.length !== prevTicketData.comments.length) {
      this.setState({ ticketData: newTicketData });
    }
  }

  getSeverityRatingTicket = (fraudRisk) => {
    if (fraudRisk === null) return "warning";
    if (fraudRisk >= 50) {
      return "error";
    } else if (fraudRisk > 25 && fraudRisk < 50) {
      return "warning";
    } else if (fraudRisk <= 25) {
      return "success";
    }
  };

  render() {
    const eventWithTicket = this.props.events.find(
      (currentEvent) =>
        currentEvent.id ===
        getEventId({
          queryString: this.props.location.search,
        })
    );
    if (this.state.ticketData) {
      if (this.state.width < 1000) {
        return (
          <Container>
            <TicketCardMobile
              event={eventWithTicket}
              ticketData={this.state.ticketData}
              user={this.props.user}
              comment={this.state.comment}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              addProductToCart={this.props.addProductToCart}
              getSeverityRatingTicket={this.getSeverityRatingTicket}
            ></TicketCardMobile>
          </Container>
        );
      } else {
        return (
          <Container>
            <TicketCardDesktop
              event={eventWithTicket}
              ticketData={this.state.ticketData}
              user={this.props.user}
              comment={this.state.comment}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              addProductToCart={this.props.addProductToCart}
              getSeverityRatingTicket={this.getSeverityRatingTicket}
            ></TicketCardDesktop>
          </Container>
        );
      }
    } else {
      return <div>Loading..</div>;
    }
  }
}

const mapStateToProps = (reduxState) => {
  return {
    events: reduxState.events,
    user: reduxState.user,
  };
};

export default connect(mapStateToProps, { postComment, addProductToCart })(
  TicketContainer
);
