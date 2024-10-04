// import React from 'react';
// import './Community.css';

// const Community = () => {
//   const communities = [
//     { id: 1, name: "Stress and Pressure" },
//     { id: 2, name: "Relationships - Family and Friends" },
//     { id: 3, name: "Bullying" },
//     { id: 4, name: "Insecurity" },
//     { id: 4, name: "WorkLoad" },
//   ];

//   return (
//     <div className="community">
//       <h2 className="community-title">Join a Community</h2>
      
//       {/* Introduction Section */}
//       <div className="benefits-section">
//         <div className="benefit">
//           <h3>Share Your Thoughts</h3>
//           <p>
//             Expressing your feelings and experiences can help lighten your emotional load. 
//             Join a community where you can freely share and connect with others who understand.
//           </p>
//         </div>
//         <div className="benefit">
//           <h3>Find Support</h3>
//           <p>
//             Being part of a community provides you with a support system. Connect with people who
//             can relate to your struggles and offer helpful advice.
//           </p>
//         </div>
//         <div className="benefit">
//           <h3>Learn and Grow</h3>
//           <p>
//             Engage in discussions that can help you gain new perspectives and insights. 
//             Sharing experiences fosters growth and resilience.
//           </p>
//         </div>
//       </div>

//       {/* Community Options */}
//       <div className="community-options">
//         {communities.map((community) => (
//           <div key={community.id} className="community-card">
//             <p>{community.name}</p>
//             <button className="join-button">Join Chat</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Community;

import React, { useState } from 'react';
import './Community.css';
import Chats from './Chats'; // Import the chat component

const Community = () => {
  const [activeCommunity, setActiveCommunity] = useState(null); // Track which community is active

  const communities = [
    { id: 1, name: "Stress and Pressure" },
    { id: 2, name: "Relationships - Family and Friends" },
    { id: 3, name: "Bullying" },
    { id: 4, name: "Insecurity" },
    { id: 5, name: "Workload" },
  ];

  const handleJoin = (community) => {
    setActiveCommunity(community); // Set the active community on join button click
  };

  return (
    <div className="community">
      {/* Show community options if no active chat */}
      {!activeCommunity ? (
        <>
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
                <button className="join-button" onClick={() => handleJoin(community.name)}>
                  Join Chat
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Show the chat box when a community has been joined
        <div className="chat-section">
          <h2>{`Community Chat: ${activeCommunity}`}</h2>
          <Chats /> {/* Render the chat component here */}
          <button className="leave-button" onClick={() => setActiveCommunity(null)}>
            Leave Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default Community;

