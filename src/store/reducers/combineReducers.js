import { combineReducers } from "redux";
import alert from "./alert";
import nav from "./nav";

const reducers = combineReducers({
  alert,
  nav
});

export default reducers;
