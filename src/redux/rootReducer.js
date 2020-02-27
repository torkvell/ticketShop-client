import { combineReducers } from "redux";
import shop from "./shop/reducer";
import cart from "./cart/reducer";
import user from "./user/reducer";
import events from "./events/reducer";

export default combineReducers({
  shop,
  cart,
  user,
  events
});
