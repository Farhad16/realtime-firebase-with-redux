import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import SingleCourse from "./SingleCourse";

const CourseList = () => {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Implement your search logic here.
    console.log(data.search);
  };

  async function fetchData() {
    setIsLoading(true);
    await fetch(
      "https://alemeno-1-default-rtdb.firebaseio.com/courseList.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIsLoading(false);
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-10 px-16 flex flex-col items-center gap-6 bg-gray-200">
      <div className="search-box bg-slate-200 rounded-full px-6 py-3 flex items-center w-full sm:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                />
              )}
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {Object.values(courseData).map((course) => (
          <SingleCourse {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
