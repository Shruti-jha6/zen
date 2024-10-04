// src/comp/Contact.jsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact.css'; // Create a CSS file for styles

const Contact = () => {
  const [location, setLocation] = useState({ lat: 28.6139, lng: 77.2090 }); // Default to New Delhi coordinates

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Nearby Psychologists</h1>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>

      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* Replace with your Google Maps API key */}
          <GoogleMap
            mapContainerStyle={{ height: "400px", width: "100%" }}
            center={location}
            zoom={12}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Contact;
