import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="nav">
      <div className="nav-section1">
        <a href="#profile" className="nav-link1">Profile</a>
      </div>
      <div className="nav-section2">
        <button onClick={scrollToTop} className="nav-link2">Top</button>
      </div>
    </header>
  );
};

export default Header;
