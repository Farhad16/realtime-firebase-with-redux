import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import SingleCourse from "./SingleCourse";
import debounce from "lodash/debounce";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";

const CourseList = () => {
  const courses = useSelector((state) => state.course.courses);
  const isLoading = useSelector((state) => state.course.loading);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(courses);
  }, [courses]);

  const { control } = useForm();

  const filterCourses = debounce((searchQuery) => {
    if (searchQuery.trim() === "") {
      setFilterData(courses);
    } else {
      const filtered = courses.filter(
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
      <div className="flex flex-col gap-4 w-full items-center justify-center mt-6">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {filterData.length ? (
              filterData.map((course) => (
                <SingleCourse {...course} key={course.id} />
              ))
            ) : (
              <NotFound content="No result found" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseList;
