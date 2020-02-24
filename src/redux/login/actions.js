import api from "../../api";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    // TODO:
    // (1) make a POST API request to `/login`
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        // (2) after getting back the access token,
        //      dispatch the `saveAccessToken` action
        console.log("data", data);
        const accessToken = data.jwt;
        dispatch(updateErrorMsg(null));
        dispatch(saveAccessToken(accessToken));
      })
      .catch(err => {
        // console.log("err", err.api_error.error);
        dispatch(updateErrorMsg(err.api_error.error));
      });
  };
}
// An action creator
export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function updateErrorMsg(error) {
  return {
    type: "auth/ERROR",
    payload: error
  };
}
