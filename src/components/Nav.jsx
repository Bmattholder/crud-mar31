import React from "react";

import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="people-nav">
      <Link to="/" className="people-link">
        Home
      </Link>
      <Link to="/new-person-form" className="people-link">
        Form
      </Link>
      <Link to="/login" className="people-link">
        Login
      </Link>
    </nav>
  );
}

export default Nav;
