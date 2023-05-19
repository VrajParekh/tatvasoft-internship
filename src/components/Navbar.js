import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
