import React from "react";
import { MENU_ITEMS } from "./constants";

export default function MobileMenu({ isOpen = false, toggleMenu }) {
  return (
    <div className={`menu mobile-menu ${isOpen ? "visible" : "hidden"}`}>
      <ul className="nav-list">
        {Object.keys(MENU_ITEMS).map((key) => (
          <li key={key}>
            <a href={MENU_ITEMS[key]} className="nav-link" onClick={toggleMenu}>
              {key}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
