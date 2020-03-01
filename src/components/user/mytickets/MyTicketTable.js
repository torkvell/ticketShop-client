import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";

export default class TicketTable extends React.Component {
  onChangeEvent = id => {
    this.setState({ eventId: id });
  };
  state = {
    columns: [
      { title: "ID", field: "id", editable: "never" },
      { title: "Title", field: "title" },
      { title: "Description", field: "description" },
      {
        title: "Event",
        field: "event",
        editComponent: rowData => (
          <select onChange={e => this.onChangeEvent(e.target.value)}>
            <option>Select event</option>
            {this.props.events.map(event => {
              //This event ID is used to insert ticket into db so we can connect the ticket to the correct event
              return <option value={event.id}>{event.name}</option>;
            })}
          </select>
        )
      },
      { title: "Price", field: "price", type: "numeric" },
      { title: "Image URL", field: "imageUrl" }
    ],
    data: this.props.user.tickets
      ? this.props.user.tickets.map(ticket => {
          const eventForCurrentTicket = this.props.events.filter(
            event => ticket.eventId === event.id
          )[0];
          const eventName = eventForCurrentTicket
            ? eventForCurrentTicket.name
            : "something went wrong";
          return {
            id: ticket.id,
            title: ticket.title,
            description: ticket.description,
            event: eventName,
            price: ticket.price,
            imageUrl: ticket.imageUrl
          };
        })
      : []
  };

  render() {
    const msg = this.props.user.tickets ? true : false;
    return (
      <Container>
        <MaterialTable
          title="My Tickets"
          columns={this.state.columns}
          data={
            this.props.user.tickets
              ? this.props.user.tickets.map(ticket => {
                  const eventForCurrentTicket = this.props.events.filter(
                    event => ticket.eventId === event.id
                  )[0];
                  const eventName = eventForCurrentTicket
                    ? eventForCurrentTicket.name
                    : "something went wrong";
                  return {
                    id: ticket.id,
                    title: ticket.title,
                    description: ticket.description,
                    event: eventName,
                    price: ticket.price,
                    imageUrl: ticket.imageUrl
                  };
                })
              : []
          }
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
                this.props.createTicket(
                  newData.title,
                  newData.description,
                  newData.price,
                  newData.imageUrl,
                  this.props.user.id,
                  this.state.eventId,
                  this.props.user.token
                );
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
                this.props.updateTicket(
                  oldData.id,
                  newData.title,
                  newData.description,
                  newData.price,
                  newData.imageUrl,
                  this.state.eventId,
                  this.props.user.token,
                  this.props.user.id
                );
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                  this.props.deleteTicket(
                    this.props.user.id,
                    oldData.id,
                    this.props.user.token
                  );
                }, 600);
              })
          }}
        />
      </Container>
    );
  }
}
