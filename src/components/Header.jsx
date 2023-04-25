import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <button className="menu-btn" onClick={handleMenuClick}>
          {showMenu ? (
            <img src={close} alt="Close" />
          ) : (
            <img src={menu} alt="Menu" />
          )}
        </button>
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        {showMenu && (
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">shop</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
