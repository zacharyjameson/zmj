import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {

    return (
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            Zachary Jameson
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bio" className="nav-link">
                Bio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/audioshire" className="nav-link">
                audioshire.
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactme" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
