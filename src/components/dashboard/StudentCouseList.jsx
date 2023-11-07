import React from "react";
import { Link } from "react-router-dom";

function StudentCourseList({
  name,
  instructor,
  duration,
  id,
  thumbnail,
  enrollmentStatus,
  isCompleted,
}) {
  return (
    <Link
      to={`/course-details/${id}`}
      className="box-shadow flex flex-row gap-4 p-6 rounded-xl group transition duration-300 ease-in-out w-full"
    >
      <img
        src={`/images/${thumbnail}.jpg`}
        alt="img"
        className="w-[220px] h-[120px] rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-500">Instructor - {instructor}</p>
        <p className="text-sm font-semibold">Duration - {duration}</p>
        <div>
          <span
            className={`text-sm pt-1 pb-1.5 px-4 text-white rounded-lg ${
              enrollmentStatus === "Open"
                ? "bg-green-500"
                : enrollmentStatus === "Closed"
                ? "bg-red-500"
                : "bg-indigo-500"
            }`}
          >
            {enrollmentStatus}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default StudentCourseList;
