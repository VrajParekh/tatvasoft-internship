import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tatvasoft_logo.png";
import "../styles/navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="img">
        <img src={logo} alt="App logo" height={65} />
      </div>
      <div className="sideLinks">
        <Link to="/login" style={{ marginLeft: 10 }}>
          Login
        </Link>
        <Link to="/register" style={{ marginLeft: 10 }}>
          Register
        </Link>
        <div className="cartDiv">
          <ShoppingCartIcon style={{ color: "#f14d54" }} />
          <Typography>0 cart</Typography>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
