import React from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";

const pages = [
  { name: "Home", link: "/" },
  { name: "Course", link: "/course" },
  { name: "Dashboard", link: "/dashboard" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  return (
    <nav className="bg-blue-400 p-4 px-16">
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
                className="text-white hover:text-yellow-500"
                activeClassName="text-yellow-500"
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <Avatar
            alt="User Avatar"
            src="/path-to-your-image.jpg"
            onClick={handleAvatarClick}
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
            <MenuItem onClick={handleAvatarClose}>User Email</MenuItem>
            <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
            <MenuItem onClick={handleAvatarClose}>Settings</MenuItem>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
