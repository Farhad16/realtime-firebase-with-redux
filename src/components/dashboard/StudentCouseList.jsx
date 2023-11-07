import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import LinearProgress from "@mui/material/LinearProgress";

function StudentCourseList({
  name,
  instructor,
  duration,
  id,
  thumbnail,
  enrollmentStatus,
  isCompleted,
  progress,
}) {
  const handleCheckboxChange = () => {};
  return (
    <div className="box-shadow flex flex-col p-6 rounded-xl group transition duration-300 ease-in-out w-full">
      <div className="flex flex-row gap-4">
        <img
          src={`/images/${thumbnail}.jpg`}
          alt="img"
          className="w-[150px] h-[100px] rounded-lg"
        />
        <div className="flex flex-col gap-1 w-full">
          <p className="font-bold text-base">{name}</p>
          <p className="text-sm text-gray-500">Instructor - {instructor}</p>
          <p className="text-sm font-semibold">Duration - {duration}</p>
          <div className="flex flex-col gap-1 mt-3">
            <p className="text-blue-600 text-xs font-medium">
              Completed - {progress}%
            </p>
            <LinearProgress
              variant="determinate"
              value={progress}
              style={{ height: "10px", width: "100%", borderRadius: "6px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm gap-1">
        <Checkbox
          checked={true}
          onChange={handleCheckboxChange}
          color="primary"
        />
        <span>{isCompleted ? "Completed" : "Mark as completed"}</span>
      </div>
    </div>
  );
}

export default StudentCourseList;
