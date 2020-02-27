import axios from "axios";

export function postComment(comment, ticketId, userId, token) {
  return async function(dispatch) {
    const response = await axios.post(
      "http://localhost:4000/comment/create",
      { comment, ticketId, userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("server response", response);
    if (!response.data.error) {
      dispatch(newTicketComment(response.data));
    } else {
      dispatch(errorHandler(response.data));
    }
  };
}
function newTicketComment(data) {
  return { type: "COMMENT_CREATED", payload: data };
}

function errorHandler(data) {
  return { type: "ERROR", payload: data };
}
