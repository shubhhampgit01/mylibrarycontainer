import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
 
  return (
    <div className={style.homepage}>
      <Navbar name='AtticBits' />
      <header className={style.hero}>
        <div className={style.hero__content}>
          <h1>Welcome to our Website</h1>
          <p>Your success is our priority.</p>
          <a href="#about" className={style.hero__button}>Learn More</a>
        </div>
      </header>
      <main className={style.content}>
        <section id="about">
          <h2>About Us</h2>
          <p>We are a team of dedicated professionals...</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>We offer a variety of services to help you...</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us for more information...</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
