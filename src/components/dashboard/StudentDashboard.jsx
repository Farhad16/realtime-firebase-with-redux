import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import StudentCourseList from "./StudentCouseList";

const StudentDashboard = () => {
  const courses = useSelector((state) => state.student.courses);
  const isLoading = useSelector((state) => state.student.loading);

  return (
    <div className="flex flex-col gap-4 min-h-screen flex-grow py-6">
      <h1 className="text-xl font-medium">Your Courses</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full items-center justify-center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {courses.length ? (
              courses.map((course) => (
                <StudentCourseList {...course} key={course.id} />
              ))
            ) : (
              <div className="text-center">
                <SentimentVeryDissatisfiedIcon
                  fontSize="large"
                  className="text-gray-400"
                />
                <p className="text-gray-600 mt-2">No results found</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
