import React, { useState } from "react";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // check position of window
  const [scrollPosition, setScrollPosition] = useState(0);

  // function to determine background colour or not
  window.onscroll = function (e) {
    setScrollPosition(window.scrollY);
  };

  const toggleMenu = () => setIsOpen((wasOpen) => !wasOpen);

  return (
    <>
      <nav className={scrollPosition === 0 ? "nav" : "nav nav-background"}>
        {/* title of the website */}
        <div className="nav-container">
          <div className="nav-title-container">
            <div className="nav-title">
              <h1>Aniqa Johnson</h1>
            </div>
            <div className="nav-title-description">
              <h2>Mental Health Counsellor</h2>
            </div>
          </div>

          {/* List of links  */}
          <Menu />
        </div>
        {/* burger icon for mobile devices */}
      </nav>
      <div className="burger-container">
        <div className="burger-menu" onClick={toggleMenu}>
          <div
            className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}
          ></div>
          <div
            className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}
          ></div>
          <div
            className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}
          ></div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
