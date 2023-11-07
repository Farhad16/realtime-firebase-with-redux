import { createSlice } from "@reduxjs/toolkit";
import { subscribeToCourseList } from "../../services/firebase";

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

// Create a subscription function to fetch and update data in real-time
export const subscribeCourses = () => (dispatch) => {
  dispatch(setCoursesLoading(true));

  subscribeToCourseList((data) => {
    dispatch(setCourses(data));
    dispatch(setCoursesLoading(false));
  });
};

export default courseSlice.reducer;
