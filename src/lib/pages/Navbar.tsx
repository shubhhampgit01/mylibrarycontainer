import React from 'react';
import './Navbar.scss';

// Define the interface for props
interface NavbarProps {
  name?: string;
}

// Use the defined props interface for the component
const Navbar: React.FC<NavbarProps> = ({ name }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">{name}</h1>
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#home">Home</a></li>
          <li className="navbar__item"><a href="#about">About</a></li>
          <li className="navbar__item"><a href="#services">Services</a></li>
          <li className="navbar__item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;