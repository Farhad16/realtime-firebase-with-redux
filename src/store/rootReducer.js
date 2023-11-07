import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import courseReducer from "./course/course.slice";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
});

export default rootReducer;
