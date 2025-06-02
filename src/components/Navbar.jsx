import React, { useState, useEffect, useCallback } from "react"; // Added useEffect, useCallback
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";
import "./css/Navbar.css"; // Component specific styles

/**
 * Navbar component provides the main navigation bar for the website.
 * It changes background based on scroll position and includes a mobile menu.
 */
const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // State to track scroll position for changing navbar background
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = useCallback(() => {
    // Wrapped in useCallback for performance
    setIsOpen((wasOpen) => !wasOpen);
  }, []); // No dependencies, so it's stable

  // Effect to handle scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <>
      {/* Main navigation element, applies background based on scroll */}
      <nav className={scrollPosition === 0 ? "nav" : "nav nav-background"}>
        <div className="nav-container">
          {/* Website title and description */}
          <div className="nav-title-container">
            <div className="nav-title">
              <h1>Aniqa Johnson</h1>
            </div>
            <div className="nav-title-description">
              <h2>Registered Counsellor</h2>
            </div>
          </div>

          {/* Desktop navigation menu */}
          <Menu />
        </div>
      </nav>

      {/* Burger icon container for mobile devices */}
      <div className="burger-container">
        <div className="burger-menu" onClick={toggleMenu}>
          {/* Burger bars with conditional classes for animation */}
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

      {/* Mobile menu, visibility controlled by isOpen state */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
