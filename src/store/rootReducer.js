import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import courseReducer from "./course/course.slice";
import studentReducer from "./student-course/student.slice";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  student: studentReducer,
});

export default rootReducer;
