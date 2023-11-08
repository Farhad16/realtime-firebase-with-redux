// src/store/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { subscribeToCourseListByStudent } from "../../services/firebase";

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
    clearCourse: (state) => {
      state.courses = [];
    },
  },
});

export const { setCourses, setLoading, clearCourse } = studentSlice.actions;

export const subscribeCoursesByStudent = () => (dispatch) => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  dispatch(setLoading(true));

  subscribeToCourseListByStudent((data) => {
    const courseGenericStructure = data
      ? Object.keys(data).map((key) => ({
          enrollId: key,
          ...data[key],
        }))
      : [];
    const filterByEmail = storedUser.email
      ? courseGenericStructure.filter(
          (course) => course.email === storedUser?.email
        )
      : [];

    dispatch(setCourses(filterByEmail));
    dispatch(setLoading(false));
  });
};

export default studentSlice.reducer;
