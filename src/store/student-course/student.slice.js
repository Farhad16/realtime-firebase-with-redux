// src/store/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCourseByStudent,
  subscribeToCourseListByStudent,
} from "../../services/firebase";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    courses: [],
    loading: false,
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourses, setLoading } = studentSlice.actions;

export const subscribeCoursesByStudent = () => (dispatch) => {
  dispatch(setLoading(true));

  subscribeToCourseListByStudent((data) => {
    dispatch(setCourses(data));
    dispatch(setLoading(false));
  });
};

export default studentSlice.reducer;
