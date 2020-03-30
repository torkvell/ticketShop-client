import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";

export default function EventTable(props) {
  // const onDateChange = (start, date) => {
  //   if (start) {
  //     setStartDate({ startDate: date });
  //   } else if (!start) {
  //     setEndDate({ endDate: date });
  //   }
  // };
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [state, setState] = React.useState({
    startDate: null,
    endDate: null,
    columns: [
      { title: "ID", field: "id", editable: "never" },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      {
        title: "Start date",
        field: "startDate",
        editComponent: () => (
          <input
            type="date"
            onChange={e => setStartDate(e.target.value)}
          ></input>
        )
      },
      {
        title: "End date",
        field: "endDate",
        editComponent: () => (
          <input type="date" onChange={e => setEndDate(e.target.value)}></input>
        )
      },
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
                startDate,
                endDate,
                newData.description,
                props.user.token
              );
            }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //       if (oldData) {
          //         setState(prevState => {
          //           const data = [...prevState.data];
          //           data[data.indexOf(oldData)] = newData;
          //           return { ...prevState, data };
          //         });
          //       }
          //     }, 600);
          //   }),
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
