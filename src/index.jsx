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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <CourseList />,
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
      },
    ],
  },
]);

store.dispatch(fetchCourses());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
