// import React, { useState } from 'react';
// import './Journal.css';

// function Journal() {
//   // State to store the paragraphs entered by the user
//   const [paragraphs, setParagraphs] = useState([]);
//   // State to track whether text is saved
//   const [isSaved, setIsSaved] = useState(false);
//   // State to store the current text
//   const [currentText, setCurrentText] = useState('');

//   // Function to handle changes in the textarea and update the state
//   const handleChange = (event) => {
//     setCurrentText(event.target.value);
//   };

//   // Function to handle saving the text
//   const handleSave = () => {
//     setParagraphs([...paragraphs, currentText]);
//     setIsSaved(true);
//   };

//   return (
//     <div className="write">
//       {/* Textarea input field for entering paragraphs */}
//       <textarea className="text" onChange={handleChange} placeholder="Write everyday"></textarea>

//       {/* Button to save the text */}
//       <button className="Save-but" onClick={handleSave}>Save</button>

//       {/* Display the entered paragraphs if text is saved */}
//       {isSaved && (
//         <div>
//           {paragraphs.map((paragraph, index) => (
//             <div key={index} className="fixed-div">
//               <p>{paragraph}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Journal

import React, { useState } from 'react';
import './Journal.css';

function Journal() {
  // State to store the paragraphs entered by the user
  const [paragraphs, setParagraphs] = useState([]);
  // State to track whether text is saved
  const [isSaved, setIsSaved] = useState(false);
  // State to store the current text
  const [currentText, setCurrentText] = useState('');

  // Function to handle changes in the textarea and update the state
  const handleChange = (event) => {
    setCurrentText(event.target.value);
  };

  // Function to handle saving the text
  const handleSave = () => {
    setParagraphs([...paragraphs, currentText]);
    setCurrentText(''); // Clear the textarea after saving
    setIsSaved(true);
  };

  return (
    <div className="write">
      {/* Textarea input field for entering paragraphs */}
      <textarea
        className="text"
        value={currentText} // Control the textarea
        onChange={handleChange}
        placeholder="Write every day"
      />

      {/* Button to save the text */}
      <button className="Save-but" onClick={handleSave}>Save</button>

      {/* Display the entered paragraphs if text is saved */}
      {isSaved && (
        <div className="paragraphs-container">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="fixed-div">
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Journal;
