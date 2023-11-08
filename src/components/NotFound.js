import React from "react";

const NotFound = ({ content, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-xl py-16 p-10 text-center pointer-events-none box-shadow text-gray-600 w-[300px] ${className}`}
    >
      <img src="/notfound.png" alt="notfound" className="w-[150px]" />
      <p className="text-xl">{content}</p>
    </div>
  );
};

export default NotFound;
