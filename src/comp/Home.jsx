

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter for routing
import gsap from 'gsap';
import Navbar from './Navbar'; // Corrected import path
import './Home.css';
import Header from './Header';
import Journal from './Journal';
import Community from './Community';
import Meditate from './Meditate';
// import Chats from './Chats';
import Test from './Test';
import Exercise from './Exercise';
import Chatbot from './Chatbot';
import Content from './Content';
// import Contact from './Contact';

import SelfCare from './SelfCare';
// import Quote from './Quote';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation: appears from below and settles at the center
    tl.fromTo(
      ".heading",
      { y: '100%', opacity: 0, scale: 1.2 }, // Start from below the screen with a larger size
      { y: '0', opacity: 1, scale: 1, duration: 2, ease: 'power3.inOut' } // Move to center and scale to original size
    )
    .to(
      ".heading",
      { y: '-20px', duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut' } // Floating effect
    );
  }, []);

  return (
    <Router> {/* Wrap with Router for routing */}
      <div>
        <Header/>
        <Navbar/>
       
       

       
         {/* Navbar will be available on all routes */}
        <div className='container'>
          <header className="header">
            <h1 className="heading">ZenBloom</h1>
          </header>
        </div>
       
          
        

        <Routes>
          {/* Define the routes for your components */}
          <Route path="/" element={<h2></h2>} /> {/* Home message */}
          <Route path="/journal" element={<Journal />} /> {/* Route to Journal */}
          <Route path="/Community" element={<Community />} /> {/* Route to Journal */}
          <Route path="/Meditate" element={<Meditate />} /> {/* Route to Journal */}
          <Route path="/Test" element={<Test />} /> {/* Route to Journal */}
          <Route path="/Exercise" element={<Exercise />} /> {/* Route to Journal */}
          <Route path="/Chatbot" element={<Chatbot />} /> {/* Route to Journal */}
          <Route path="/SelfCare" element={<SelfCare />} /> {/* Route to Journal */}
          <Route path="/Content" element={<Content />} /> {/* Route to Journal */}



          {/* Add more routes as needed */}
        </Routes>
      </div>
      
      
    </Router>
  );
};

export default Home;

