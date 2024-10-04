import React from 'react';
import './Quote.css';

const Quote = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Quote className="navbar">
      <div className="navbar-section">
        <a href="#profile" className="navbar-link">Profile</a>
      </div>
      <div className="navbar-section">
        <button onClick={scrollToTop} className="navbar-link">Go to Top/Home</button>
      </div>
    </Quote>
  );
};

export default Quote;
