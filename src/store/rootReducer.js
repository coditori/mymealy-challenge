import { combineReducers } from "redux";
import usersReducer from "./user/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
