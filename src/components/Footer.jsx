import React from "react";
import { BusinessCenter } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Course", link: "/course" },
  { name: "Dashboard", link: "/dashboard" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-400 px-16 py-4 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <BusinessCenter fontSize="large" />
          <Typography variant="h6" component="h2" className="ml-2">
            Alemeno
          </Typography>
        </div>
        <ul className="flex flex-wrap justify-center space-x-4 my-4 md:my-0">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                to={page.link}
                className="hover:text-yellow-300 transition duration-300"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Alemeno. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
