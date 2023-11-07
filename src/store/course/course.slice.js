// src/store/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/firebase";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    loading: false,
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setCoursesLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourses, setCoursesLoading } = courseSlice.actions;

// Create an async thunk to fetch data and dispatch the setCourses action
export const fetchCourses = () => async (dispatch) => {
  try {
    dispatch(setCoursesLoading(true));
    const data = await fetchData();
    dispatch(setCourses(data));
    dispatch(setCoursesLoading(false));
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
};

export default courseSlice.reducer;
