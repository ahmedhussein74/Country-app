import React from "react";
import { Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center p-3">
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        className="text-white"
      >
        Where in the world
      </Typography>
      <Link to='/' replace='true'>
        <Home fontSize="large" className="text-white" />
      </Link>
    </nav>
  );
};

export default Nav;
