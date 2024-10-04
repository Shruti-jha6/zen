// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbar ${isOpen ? "open" : ""}`}>
//       <div className="logo">Content</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="burger" onClick={toggleNavbar}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//       {isOpen && (
//         <div className="overlay">
//           <ul className="overlay-links">
//             <li><a href="#home" onClick={toggleNavbar}>Home</a></li>
//             <li><a href="#about" onClick={toggleNavbar}>About</a></li>
//             <li><a href="#services" onClick={toggleNavbar}>Services</a></li>
//             <li><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
//           </ul>
//           <div className="close-icon" onClick={toggleNavbar}>×</div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="logo">Content</div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="burger" onClick={toggleNavbar}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {isOpen && (
        <div className="overlay">
          <ul className="overlay-links">
            <li><a href="#home" onClick={toggleNavbar}>Home</a></li>
            <li><a href="#about" onClick={toggleNavbar}>About</a></li>
            <li><a href="#services" onClick={toggleNavbar}>Services</a></li>
            <li><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
          </ul>
          <div className="close-icon" onClick={toggleNavbar}>×</div>
        </div>
      )}
    </>
  );
};

export default Navbar;

