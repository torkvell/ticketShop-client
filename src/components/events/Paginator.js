import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function Paginator(props) {
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
