import React from 'react';
import './Header.less';

const Header: React.FC = () => {
  return (
    <header className="salon-header">
      <div className="logo">Toni Salon</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
