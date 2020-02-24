const initialState = {
  userLoggedIn: false,
  id: false,
  email: false,
  token: null,
  error: null,
  accountCreated: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_CREATED":
      return { ...state, accountCreated: true };
    case "UPDATE_USER":
      console.log("UPDATE_USER REDUCER");
      const roomId = action.payload.roomId;
      return { ...state, roomId: roomId };
    case "ERROR":
      const errorMsg = action.payload.message;
      return { ...state, error: errorMsg };
    case "USER_LOGOUT":
      return { ...initialState, accountCreated: false };
    case "LOGIN_SUCCESS":
      // console.log(`login success reducer:`, action.payload);
      return {
        ...state,
        userLoggedIn: true,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token
      };
    case "USER_JOIN_ROOM": {
      // console.log("THE UPDATE USER PAYLOAD", action.payload);
      return { ...state, gameId: action.payload };
    }
    default:
      return state;
  }
};
