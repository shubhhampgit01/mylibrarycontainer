import React from 'react';
// import './Navbar.module.scss';
import style from "./Navbar.module.scss"

// Define the interface for props
interface NavbarProps {
  name?: string;
}

// Use the defined props interface for the component
const Navbar: React.FC<NavbarProps> = ({ name }) => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__container}>
        <h1 className={style.navbar__logo}>{name}</h1>
        <ul className={style.navbar__menu}>
          <li className={style.navbar__item}><a href="#home">Home</a></li>
          <li className={style.navbar__item}><a href="#about">About</a></li>
          <li className={style.navbar__item}><a href="#services">Services</a></li>
          <li className={style.navbar__item}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;