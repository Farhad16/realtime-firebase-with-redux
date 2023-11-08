import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import StudentCourseList from "./StudentCouseList";
import NotFound from "../NotFound";

const StudentDashboard = () => {
  const courses = useSelector((state) => state.student.courses);
  const isLoading = useSelector((state) => state.student.loading);

  return (
    <>
      <h1 className="text-xl font-bold pt-6">Your Courses</h1>
      <div className="flex flex-col gap-4 min-h-screen flex-grow py-6 items-center">
        <>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {courses.length ? (
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full items-center justify-center">
                  {courses.map((course) => (
                    <StudentCourseList {...course} key={course.id} />
                  ))}
                </div>
              ) : (
                <NotFound content="Result not found of you didn't enroll yet" />
              )}
            </>
          )}
        </>
      </div>
    </>
  );
};

export default StudentDashboard;
