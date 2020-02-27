import axios from "axios";

export function postComment(comment, ticketId, userId, token) {
  return async function(dispatch) {
    const response = await axios.post(
      "http://localhost:4000/comment/create",
      { comment, ticketId, userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("server response", response);
    // if (!response.error) {
    //   dispatch(newComment(response.data));
    // } else {
    //   dispatch(errorHandler(response.data));
    // }
  };
}
