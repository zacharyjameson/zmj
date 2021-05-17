import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="navBar">
      <h1 className="nav-logo">Zachary Jameson</h1>
      <div>
        <h1 className="meNav">ZMJ</h1>
      </div>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "white", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu
              style={{ color: "white", width: "40px", height: "40px" }}
            />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link to="/" onClick={() => closeMenu()} className="nav-link">
              home.
            </Link>
          </li>
          <li>
            <Link to="/bio" onClick={() => closeMenu()} className="nav-link">
              career.
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              portfolio.
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
              to="/interests"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              interests.
            </Link>
          </li>
          <li>
            <Link
              to="/contactme"
              onClick={() => closeMenu()}
              className="nav-link"
            >
              contact.
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
