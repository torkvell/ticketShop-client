import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";

export default function EventTable(props) {
  console.log("MyEventTable props:", props);
  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "id", editable: "never" },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Start date", field: "startDate" },
      { title: "End date", field: "endDate" },
      { title: "Image URL", field: "imageURL" }
    ],
    data: props.user.events
      ? props.user.events.map(event => {
          return {
            id: event.id,
            name: event.name,
            description: event.description,
            startDate: event.startDate,
            endDate: event.endDate,
            imageURL: event.imageUrl
          };
        })
      : []
  });

  return (
    <Container>
      <MaterialTable
        title="My Events"
        columns={state.columns}
        data={
          props.user.events
            ? props.user.events.map(event => {
                return {
                  id: event.id,
                  name: event.name,
                  description: event.description,
                  startDate: event.startDate,
                  endDate: event.endDate,
                  imageURL: event.imageUrl
                };
              })
            : []
        }
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
              props.createEvent(
                newData.name,
                newData.imageURL,
                newData.startDate,
                newData.endDate,
                newData.description,
                props.user.id,
                props.user.token
              );
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
                console.log(oldData);
                props.deleteEvent(oldData.id, props.user.token, props.user.id);
              }, 600);
            })
        }}
      />
    </Container>
  );
}
