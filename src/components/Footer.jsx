import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center px-4 py-3 gap-4">
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Alemeno
      </Typography>
    </div>
  );
};

export default Footer;
