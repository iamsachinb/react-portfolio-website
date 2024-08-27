import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center p-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sachin B. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
