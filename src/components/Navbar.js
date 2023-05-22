import React from "react";
import { Link } from "react-router-dom";
import { globalStyles } from "../constants";

const Navbar = () => {
  return (
    <div style={{ ...globalStyles.navbar }}>
      <Link to="/" style={{ marginLeft: 5 }}>
        Home
      </Link>
      <Link to="/apple" style={{ marginLeft: 10 }}>
        Apple
      </Link>
      <Link to="/applet" style={{ marginLeft: 10 }}>
        Applet
      </Link>
    </div>
  );
};

export default Navbar;
