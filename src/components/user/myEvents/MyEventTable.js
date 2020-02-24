import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";

export default function EventTable(props) {
  console.log("MyEventTable props:", props);
  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "id" },
      { title: "Description", field: "description" },
      { title: "Price", field: "price", type: "numeric" },
      { title: "Image URL", field: "imageURL" }
    ],
    data: props.user.events.map(event => {
      return {
        id: event.id,
        description: event.description,
        price: event.price,
        imageURL: event.imageUrl
      };
    })
  });
  let data = props.user.events.map(event => {
    return {
      id: event.id,
      description: event.description,
      price: event.price,
      imageURL: event.imageUrl
    };
  });
  console.log(data);

  return (
    <Container>
      <MaterialTable
        title="My Events"
        columns={state.columns}
        data={state.data}
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
                newData.description,
                newData.price,
                newData.imageURL,
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
                props.deleteEvent(oldData.id, props.user.token);
              }, 600);
            })
        }}
      />
    </Container>
  );
}
