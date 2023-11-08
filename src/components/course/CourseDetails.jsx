import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { enrollCourse } from "../../services/firebase";
import { toast } from "react-toastify";

const CourseDetails = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.course.courses);
  const isLoading = useSelector((state) => state.course.loading);
  const user = useSelector((state) => state.user.user);
  const [isExist, setIsExist] = useState(false);

  const course = courses.filter((course) => course.id === Number(id))[0];

  useEffect(() => {
    if (course && user) {
      const isExist = course.students.filter(
        (student) => student.email === user?.email
      )[0];
      setIsExist(isExist);
    }
  }, [user, course]);

  const handleEnroll = () => {
    if (!user) {
      toast.error("Please login before you enroll", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    enrollCourse(course, user);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress className="absolute right-[50%] top-[50%]" />
      ) : (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div className="flex flex-col py-6 gap-3">
            <img
              src={`/images/${course.thumbnail}.jpg`}
              alt="img"
              className="w-[350px] h-[200px] rounded-xl mb-4"
            />
            <p className="">
              Status -{" "}
              <span
                className={`text-sm pt-1 pb-1.5 px-4 text-white rounded-lg ${
                  course?.enrollmentStatus === "Open"
                    ? "bg-green-500"
                    : course?.enrollmentStatus === "Closed"
                    ? "bg-red-500"
                    : "bg-indigo-500"
                }`}
              >
                {course?.enrollmentStatus}
              </span>
            </p>

            <div className="flex flex-row items-center gap-2">
              <span>Location</span> -
              <p className="text-blue-600">{course?.location}</p>
            </div>
            <p>Enrolled - {course?.students.length} students</p>
            <button
              disabled={isExist}
              onClick={handleEnroll}
              className={` pb-2.5 pt-2 px-4 rounded-lg text-white text-md font-medium ${
                isExist || course?.enrollmentStatus === "Closed"
                  ? "bg-gray-500 opacity-50 text-red-700 cursor-default"
                  : "bg-yellow-500"
              }`}
            >
              {isExist
                ? "Already Enrolled"
                : course?.enrollmentStatus === "Closed"
                ? "Enrollment Closed"
                : "Enroll Now"}
            </button>
          </div>
          <div className="flex flex-col py-6 gap-2">
            <p className="font-semibold text-xl">{course?.name}</p>
            <p className="text-sm">Created by - {course?.instructor}</p>
            <div className="flex flex-col">
              <span className="font-medium">Description</span>
              <p>{course?.description}</p>
            </div>
            <p className="">Duration - {course?.duration}</p>
            <p>Schedule - {course?.schedule}</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Syllabus</p>
              {course?.syllabus.map((syl) => (
                <Accordion key={syl.week}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <p className="text-blue-600">Week - {syl.week}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{syl.topic}</p>
                      <p className="opacity-70">{syl.content}</p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
