import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import { handleGoogleLogin, singOut } from "../config/Auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";

const pages = [
  { name: "Home", link: "/" },
  { name: "Course", link: "/course" },
  { name: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  return (
    <nav className="bg-blue-400 py-4 sm:px-16 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Link
            to="/"
            className="text-white text-lg font-semibold flex items-center gap-2"
          >
            <HdrAutoIcon /> <span>Alemeno</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.name}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-yellow-300" : "text-white"
                  } hover:text-yellow-300 font-semibold`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <Avatar
            alt="User Avatar"
            src={user?.photoURL || ""}
            onClick={handleAvatarClick}
            className="cursor-pointer"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleAvatarClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="flex flex-col p-4 gap-2 font-medium">
              {user && (
                <div className="flex flex-col text-sm ml-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs opacity-50">{user.email}</p>
                </div>
              )}
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <AccountCircleIcon />
                Profile
              </p>
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <SettingsIcon /> Settings
              </p>
              {user ? (
                <p
                  className="text-sm flex gap-2 items-center cursor-pointer"
                  onClick={() => singOut(dispatch)}
                >
                  <LogoutIcon />
                  Logout
                </p>
              ) : (
                <p
                  className="text-sm flex gap-2 items-center cursor-pointer"
                  onClick={handleGoogleLogin}
                >
                  <LoginIcon /> Login
                </p>
              )}
            </div>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
