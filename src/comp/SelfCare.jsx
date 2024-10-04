// src/comp/SelfCare.jsx
import React, { useState } from 'react';
import './SelfCare.css'; // Make sure to add CSS for styling

const SelfCare = () => {
  const [sleepHours, setSleepHours] = useState('');
  const [plans, setPlans] = useState([]);
  const [hobby, setHobby] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [screenTime, setScreenTime] = useState('');

  const handleAddPlan = (e) => {
    e.preventDefault();
    setPlans([...plans, { name: hobby, time: screenTime }]);
    setHobby('');
    setScreenTime('');
  };

  return (
    <div className="self-care-container">
      <h2 className="self-care-heading">Self Care Dashboard</h2>

      {/* Sleep Tracker */}
      <div className="self-care-section">
        <h3>Sleep Tracker</h3>
        <input
          type="number"
          placeholder="Hours of Sleep"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
          className="input-field"
        />
        <p>You have slept for {sleepHours} hours today.</p>
      </div>

      {/* Plans and Events */}
      <div className="self-care-section">
        <h3>Event Planning</h3>
        <ul>
          {plans.map((plan, index) => (
            <li key={index}>{plan.name} - {plan.time} hrs</li>
          ))}
        </ul>
        <form onSubmit={handleAddPlan}>
          <input
            type="text"
            placeholder="Enter Plan or Event"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Estimated Time"
            value={screenTime}
            onChange={(e) => setScreenTime(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">Add Plan</button>
        </form>
      </div>

      {/* Hobbies */}
      <div className="self-care-section">
        <h3>Hobbies Tracker</h3>
        <form onSubmit={handleAddPlan}>
          <input
            type="text"
            placeholder="Hobby Name"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Hours Spent"
            value={screenTime}
            onChange={(e) => setScreenTime(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">Add Hobby</button>
        </form>
      </div>

      {/* Screen Time Tracker */}
      <div className="self-care-section">
        <h3>Screen Time</h3>
        <input
          type="number"
          placeholder="Enter Screen Time in Hours"
          value={screenTime}
          onChange={(e) => setScreenTime(e.target.value)}
          className="input-field"
        />
        <p>You've spent {screenTime} hours on screen today.</p>
      </div>
    </div>
  );
};

export default SelfCare;
