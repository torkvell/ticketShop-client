import { combineReducers } from "redux";
import cart from "./cart/reducer";
import user from "./user/reducer";
import events from "./events/reducer";
import checkout from "./checkout/reducer";

export default combineReducers({
  cart,
  user,
  events,
  checkout
});
