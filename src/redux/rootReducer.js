import { combineReducers } from "redux";
import shop from "./shop/reducer.js";
import cart from "./cart/reducer.js";
import user from "./user/reducer.js";
import events from "./events/reducer.js";

export default combineReducers({
  shop,
  cart,
  user,
  events
});
