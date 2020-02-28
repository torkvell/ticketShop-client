import { combineReducers } from "redux";
import cart from "./cart/reducer";
import user from "./user/reducer";
import events from "./events/reducer";

export default combineReducers({
  cart,
  user,
  events
});
