import React from "react";
import { MENU_ITEMS } from "./constants";

export default function Menu() {
  return (
    <div className="menu mobile-hidden">
      <ul className="nav-list">
        {Object.keys(MENU_ITEMS).map((key) => (
          <li key={key}>
            <a href={MENU_ITEMS[key]} className="nav-link">
              {key}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
