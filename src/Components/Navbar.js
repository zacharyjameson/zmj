import React, { useState } from "react";
import { Link } from "react-router-dom";
import me from "../images/updatedz.jpg";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="nav">
      <h1 className="nav-logo">Zachary Jameson</h1>
      <div>
        <img
          className="meNav"
          src={me}
          alt="portrait of Zachary Jameson's face in black & white"
        />
      </div>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu
              style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link to="/" onClick={() => closeMenu()} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bio" onClick={() => closeMenu()} className="nav-link">
              Bio
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/audioshire"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              audioshire.
            </Link>
          </li>
          <li>
            <Link
              to="/contactme"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;