import React, { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar'; // Corrected import path
import './Home.css';
import Header from './Header';
// import Quote from './Quote';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    

    // Initial animation: appears from below and settles at the center
    tl.fromTo(".heading", 
      { y: '100%', opacity: 0, scale: 1.2 }, // Start from below the screen with a larger size
      { y: '0', opacity: 1, scale: 1, duration: 2, ease: 'power3.inOut' } // Move to center and scale to original size
    )
    .to(".heading", 
      { y: '-20px', duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut' } // Floating effect
    );
  }, []);

  return (
    <div>
      <Header/>
      <Navbar />
      <div className='container'>
        <header className="header">
          <h1 className="heading">ZenBloom</h1>

        </header>

      </div>
      {/* <div className='container1'>
        <Quote/>

      </div> */}

    </div>
  );
};

export default Home;
