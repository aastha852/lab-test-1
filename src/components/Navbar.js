import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Page 1
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/page2">
            Page 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;