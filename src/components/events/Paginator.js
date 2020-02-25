import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function Paginator(props) {
  const classes = useStyles();
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalEvents / props.eventsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  // console.log("pagenumbers", pageNumbers);
  return (
    <Pagination
      color="primary"
      count={pageNumbers.length}
      onChange={props.paginate}
    ></Pagination>
  );
}
