import axios from "axios";

export function postComment(comment, ticketId) {
  return function(dispatch) {
    const response = axios.get("http://localhost:4000/ticket");
  };
}
