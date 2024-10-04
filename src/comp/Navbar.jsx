

// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className={`navbar ${isOpen ? "open" : ""}`}>
//         <div className="logo">Content</div>
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">Journal</a></li>
//           <li><a href="#community">Community</a></li>
//           <li><a href="#selfcare">Self Care</a></li>
//           <li><a href="#test">Test</a></li>
//           <li><a href="#content">Content</a></li>
//           <li><a href="#exercise">Exercise</a></li>
//           <li><a href="#Resources">Resources</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="burger" onClick={toggleNavbar}>
//           <div className="line1"></div>
//           <div className="line2"></div>
//           <div className="line3"></div>
//         </div>
//       </nav>
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
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
          <li><Link to="/">Home</Link></li> {/* Change to Link */}
          <li><Link to="/journal" onClick={toggleNavbar}>Journal</Link></li> {/* Change to Link */}
          <li><Link to="/community" onClick={toggleNavbar}>Community</Link></li> {/* Change to Link */}
          <li><Link to="/selfcare" onClick={toggleNavbar}>Self Care</Link></li> {/* Change to Link */}
          <li><Link to="/test" onClick={toggleNavbar}>Test</Link></li> {/* Change to Link */}
          <li><Link to="/content" onClick={toggleNavbar}>Content</Link></li> {/* Change to Link */}
          <li><Link to="/exercise" onClick={toggleNavbar}>Exercise</Link></li> {/* Change to Link */}
          <li><Link to="/meditate" onClick={toggleNavbar}>VR meditation</Link></li> {/* Change to Link */}
          <li><Link to="/resources" onClick={toggleNavbar}>Resources</Link></li> {/* Change to Link */}
          <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li> {/* Change to Link */}
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
            <li><Link to="/" onClick={toggleNavbar}>Home</Link></li> {/* Change to Link */}
            <li><Link to="/about" onClick={toggleNavbar}>About</Link></li> {/* Change to Link */}
            <li><Link to="/services" onClick={toggleNavbar}>Services</Link></li> {/* Change to Link */}
            <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li> {/* Change to Link */}
          </ul>
          <div className="close-icon" onClick={toggleNavbar}>×</div>
        </div>
      )}
    </>
  );
};

export default Navbar;

