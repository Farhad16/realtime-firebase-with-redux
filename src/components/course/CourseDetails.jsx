import React from "react";
import { useParams } from "react-router-dom";
import courseModel from "../../data/course.dummy";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CourseDetails = () => {
  const { id } = useParams();
  console.log(courseModel, id);
  const course = courseModel.filter((course) => course.id === Number(id))[0];
  console.log(course);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
      <div className="flex flex-col py-6 gap-2">
        <img
          src={course?.thumbnail}
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
  );
};

export default CourseDetails;
