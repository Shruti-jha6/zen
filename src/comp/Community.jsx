import React from 'react';
import './Community.css';

const Community = () => {
  const communities = [
    { id: 1, name: "Stress and Pressure" },
    { id: 2, name: "Relationships - Family and Friends" },
    { id: 3, name: "Bullying" },
    { id: 4, name: "Insecurity" },
    { id: 4, name: "WorkLoad" },
  ];

  return (
    <div className="community">
      <h2 className="community-title">Join a Community</h2>
      
      {/* Introduction Section */}
      <div className="benefits-section">
        <div className="benefit">
          <h3>Share Your Thoughts</h3>
          <p>
            Expressing your feelings and experiences can help lighten your emotional load. 
            Join a community where you can freely share and connect with others who understand.
          </p>
        </div>
        <div className="benefit">
          <h3>Find Support</h3>
          <p>
            Being part of a community provides you with a support system. Connect with people who
            can relate to your struggles and offer helpful advice.
          </p>
        </div>
        <div className="benefit">
          <h3>Learn and Grow</h3>
          <p>
            Engage in discussions that can help you gain new perspectives and insights. 
            Sharing experiences fosters growth and resilience.
          </p>
        </div>
      </div>

      {/* Community Options */}
      <div className="community-options">
        {communities.map((community) => (
          <div key={community.id} className="community-card">
            <p>{community.name}</p>
            <button className="join-button">Join Chat</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
