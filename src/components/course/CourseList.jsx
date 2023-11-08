import React, { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import SingleCourse from "./SingleCourse";
import debounce from "lodash/debounce";
import { CircularProgress } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useSelector } from "react-redux";

const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);
  const isLoading = useSelector((state) => state.course.loading);
  const [filterData, setFilterData] = useState([]);

  const genericCourse = useMemo(() => {
    return courses
      ? Object.keys(courses).map((key) => ({
          uniqueId: key,
          ...courses[key],
        }))
      : [];
  }, [courses]);

  useEffect(() => {
    setFilterData(genericCourse);
  }, [genericCourse]);

  const { control } = useForm();

  const filterCourses = debounce((searchQuery) => {
    if (searchQuery.trim() === "") {
      setFilterData(genericCourse);
    } else {
      const filtered = genericCourse.filter(
        (course) =>
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterData(filtered);
    }
  }, 300);

  return (
    <div className="py-10 flex flex-col items-center gap-6">
      <div className="search-box bg-slate-300 rounded-full px-6 py-3 flex items-center w-full sm:w-1/2">
        <div className="flex items-center">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <Controller
            name="searchQuery"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={(e) => {
                  field.onChange(e);
                  filterCourses(e.target.value);
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {filterData.length ? (
              filterData.map((course) => (
                <SingleCourse {...course} key={course.id} />
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

export default CourseList;
