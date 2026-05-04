import React from 'react';
import './Footer.less';

const Footer: React.FC = () => {
  return (
    <footer className="salon-footer">
      <div className="footer-content">
        <p>&copy; 2026 Toni Salon. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
