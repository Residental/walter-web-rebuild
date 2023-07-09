// Navbar.jsx
import React from 'react';

const Navbar = ({ items }) => {
  return (
    <nav className="Nav-parent">
      <ul className="Navbar">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={item.onClick}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;