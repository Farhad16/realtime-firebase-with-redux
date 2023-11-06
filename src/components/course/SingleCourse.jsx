import React from "react";
import { Link } from "react-router-dom";

function SingleCourse({ name, instructor, description, id }) {
  return (
    <Link to={`/event/${id}`}>
      <div className="box-shadow flex flex-col gap-2 p-6 bg-slate-200 rounded-xl group transition duration-300 ease-in-out">
        <p className="text-green-500 font-semibold text-lg">{name}</p>
        <p className="text-sm font-medium">{instructor}</p>
      </div>
    </Link>
  );
}

export default SingleCourse;
