
// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import * as tf from '@tensorflow/tfjs';
// import * as posenet from '@tensorflow-models/posenet';
// import './Exercise.css';

// const Exercise = () => {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [poseNet, setPoseNet] = useState(null);
//   const [pose, setPose] = useState(null);
//   const [feedback, setFeedback] = useState("");

//   useEffect(() => {
//     const loadPoseNet = async () => {
//       const net = await posenet.load();
//       setPoseNet(net);
//     };
//     loadPoseNet();
//   }, []);

//   const detectPose = async () => {
//     if (webcamRef.current && poseNet) {
//       const imgSrc = webcamRef.current.getScreenshot();
//       const img = new Image();

//       img.src = imgSrc; // Set the base64 image as the source
//       img.onload = async () => {
//         const input = tf.browser.fromPixels(img);
//         const poseData = await poseNet.estimateSinglePose(input, {
//           flipHorizontal: false,
//         });
//         setPose(poseData);
//         checkExercise(poseData);
//         drawKeypoints(poseData);
//       };
//     }
//   };

//   const checkExercise = (poseData) => {
//     const leftShoulder = poseData.keypoints[5].position;
//     const rightShoulder = poseData.keypoints[2].position;

//     if (Math.abs(leftShoulder.y - rightShoulder.y) < 50) {
//       setFeedback("Good job! Your form looks correct.");
//     } else {
//       setFeedback("Adjust your position for better form.");
//     }
//   };

//   const drawKeypoints = (poseData) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     // Ensure the canvas is the same size as the video
//     canvas.width = webcamRef.current.video.videoWidth;
//     canvas.height = webcamRef.current.video.videoHeight;

//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

//     poseData.keypoints.forEach(keypoint => {
//       if (keypoint.score > 0.5) { // Only draw keypoints with a score greater than 0.5
//         ctx.fillStyle = 'red'; // Color of the keypoint
//         ctx.beginPath();
//         ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI); // Draw a circle
//         ctx.fill();
//       }
//     });
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <h2>Exercise Pose Detection</h2>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         style={{ width: '100%', maxWidth: '600px' }}
//       />
//       <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
//       <button onClick={detectPose}>Check Pose</button>
//       {pose && (
//         <div>
//           <h3>Pose Data:</h3>
//           <pre>{JSON.stringify(pose, null, 2)}</pre>
//         </div>
//       )}
//       {feedback && <h4>{feedback}</h4>}
//     </div>
//   );
// };

// export default Exercise;

// src/comp/Exercise.jsx
// src/comp/Exercise.jsx
import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
// import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import './Exercise.css';

const Exercise = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [poseNet, setPoseNet] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const loadPoseNet = async () => {
      const net = await posenet.load();
      setPoseNet(net);
    };
    loadPoseNet();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      detectPose();
    }, 100); // Detect pose every 100ms
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [poseNet]);

  const detectPose = async () => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4 && poseNet) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // Set webcam video dimensions
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas dimensions to match the video
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Get pose from PoseNet
      const poseData = await poseNet.estimateSinglePose(video, {
        flipHorizontal: false,
      });

      // Ensure canvasRef is not null before drawing
      if (canvasRef.current) {
        drawPose(poseData);
        checkExercise(poseData);
      }
    }
  };

  const drawPose = (poseData) => {
    const canvas = canvasRef.current;

    // Ensure that the canvas has a valid context before trying to draw on it
    const context = canvas?.getContext('2d');
    if (!context) {
      console.error('Unable to get 2D context from canvas');
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw keypoints
    poseData.keypoints.forEach((keypoint) => {
      if (keypoint.score > 0.5) { // Only draw keypoints with high confidence
        const { x, y } = keypoint.position;
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();
      }
    });

    // Connect keypoints with lines (adjacent body parts)
    const adjacentKeyPoints = [
      [5, 6], [6, 7], // Left shoulder -> Left elbow -> Left hand
      [2, 8], [8, 9], // Right shoulder -> Right elbow -> Right hand
      [5, 11], [2, 12], // Left shoulder -> Left hip, Right shoulder -> Right hip
      [11, 13], [12, 14], // Left hip -> Left knee -> Left foot
      [13, 15], [14, 16], // Left knee -> Left ankle, Right knee -> Right ankle
      [0, 1], [1, 2], [0, 5], // Nose -> Eyes -> Shoulders
    ];

    context.strokeStyle = 'blue';
    context.lineWidth = 2;

    adjacentKeyPoints.forEach(([a, b]) => {
      if (poseData.keypoints[a].score > 0.5 && poseData.keypoints[b].score > 0.5) {
        context.beginPath();
        context.moveTo(poseData.keypoints[a].position.x, poseData.keypoints[a].position.y);
        context.lineTo(poseData.keypoints[b].position.x, poseData.keypoints[b].position.y);
        context.stroke();
      }
    });
  };

  const checkExercise = (poseData) => {
    const leftShoulder = poseData.keypoints[5].position;
    const rightShoulder = poseData.keypoints[2].position;

    if (Math.abs(leftShoulder.y - rightShoulder.y) < 50) {
      setFeedback("Good job! Your form looks correct.");
    } else {
      setFeedback("Adjust your position for better form.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '40%', height: '100%', position: 'relative' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
          }}
        />
      </div>
      {feedback && <h4>{feedback}</h4>}
    </div>
  );
};

export default Exercise;
