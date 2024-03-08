// RootReducer.js

import { combineReducers } from "redux";
import Memory from "./Memory.js";
import Users from "./Users.js"

export default combineReducers({
  Memory,
  Users
});
