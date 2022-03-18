import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NerdNetwork <i className=" fas fa-glasses" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-options">
              <Link to="/film&tv" className="nav-links" onClick={closeMenu}>
                Film & Television
              </Link>
            </li>
            <li className="nav-options">
              <Link to="/videogames" className="nav-links" onClick={closeMenu}>
                Videogames
              </Link>
            </li>
            <li className="nav-options">
              <Link to="/books" className="nav-links" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="nav-options">
              <Link to="/nerdnews" className="nav-links" onClick={closeMenu}>
                NerdNews
              </Link>
            </li>
            <li className="nav-options">
              <Link
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Log In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
