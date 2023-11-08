import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { handleGoogleLogin, singOut } from "../config/Auth";

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

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="bg-blue-400 py-4 sm:px-16 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Box sx={{ flexGrow: 1 }} className="md:hidden flex">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{ fill: "white", marginRight: "4px" }} />
            <Link
              to="/"
              className="text-white text-lg font-semibold flex items-center gap-2"
            >
              <HdrAutoIcon />
              <span>Alemeno</span>
            </Link>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            className="md:hidden flex items-center"
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <div className="space-x-4 items-center hidden md:flex">
          <Link
            to="/"
            className="text-white text-lg font-semibold flex items-center gap-2"
          >
            <HdrAutoIcon /> <span>Alemeno</span>
          </Link>
          <div className="space-x-4">
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
        <div className="flex items-center gap-4">
          <>
            {user ? (
              <p
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
                onClick={() => singOut(dispatch)}
              >
                Logout
              </p>
            ) : (
              <p
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
                onClick={handleGoogleLogin}
              >
                Login
              </p>
            )}
          </>
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
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs opacity-50">{user?.email}</p>
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
