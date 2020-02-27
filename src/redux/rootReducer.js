import { combineReducers } from "redux";
import shop from "./shop/reducer";
import cart from "./cart/reducer";
import user from "./user/reducer";
import events from "./events/reducer";
import comment from "./comment/reducer";

export default combineReducers({
  shop,
  cart,
  user,
  events,
  comment
});
