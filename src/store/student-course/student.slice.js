// src/store/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseByStudent, fetchData } from "../../services/firebase";

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

// Create an async thunk to fetch data and dispatch the setCourses action
export const fetchStudentCourses = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchCourseByStudent();
    dispatch(setCourses(data));
    dispatch(setLoading(false));
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
};

export default studentSlice.reducer;
