import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CourseList from "./components/course/CourseList";
import CourseDetails from "./components/course/CourseDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchCourses } from "./store/course/course.slice";
import ErrorPage from "./components/ErrorPage";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import { fetchStudentCourses } from "./store/student-course/student.slice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CourseList />,
      },
      {
        path: "course",
        element: <CourseList />,
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
    ],
  },
]);

store.dispatch(fetchCourses());
store.dispatch(fetchStudentCourses());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
