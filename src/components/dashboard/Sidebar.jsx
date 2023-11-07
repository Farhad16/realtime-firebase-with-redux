import React from "react";

const Sidebar = ({ user }) => {
  return (
    <div className="flex flex-col p-4 gap-2 font-medium bg-gray-400 ">
      <div className="flex gap-4">
        <img
          src={user.photoURL}
          alt="user"
          className="rounded-full w-16 h-16"
        />
        {user && (
          <div className="flex flex-col text-sm ml-1">
            <p className="font-medium">{user.name}</p>
            <p className="text-xs opacity-50">{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
