import React, { useState } from 'react';
import './Test.css';

const Test = () => {
  const questions = [
    {
      question: "How often do you feel anxious?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you feel sad or depressed?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "Do you have trouble sleeping?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {question: "Do you often feel overwhelmed by your responsibilities?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you feel disconnected from others?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "Do you find it hard to concentrate on tasks?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you engage in activities that you enjoy?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "Do you feel you have a support system to rely on?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you feel you can handle stress effectively?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    {
      question: "How often do you practice self-care?",
      options: [
        { answer: "Never", score: 0 },
        { answer: "Rarely", score: 1 },
        { answer: "Sometimes", score: 2 },
        { answer: "Often", score: 3 },
        { answer: "Always", score: 4 }
      ]
    },
    // Add more questions as needed
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [result, setResult] = useState("");

  const handleOptionChange = (index, score) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = score;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = selectedAnswers.reduce((acc, curr) => acc + (curr || 0), 0);
    setScore(totalScore);
    generateResult(totalScore);
  };

  const generateResult = (score) => {
    if (score <= 4) {
      setResult("Your mental health seems stable. Continue to practice self-care.");
    } else if (score <= 8) {
      setResult("You might be experiencing mild symptoms. Consider talking to someone about it.");
    } else if (score <= 12) {
      setResult("You are showing moderate symptoms. It might be helpful to reach out to a professional.");
    } else {
      setResult("You are experiencing severe symptoms. Please seek professional help.");
    }
  };

  return (
    <div className="test-container">
      <h2 className='health'>Mental Health Assessment</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{q.question}</p>
            {q.options.map((option, optIndex) => (
              <label key={optIndex} className="option">
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option.score}
                  checked={selectedAnswers[index] === option.score}
                  onChange={() => handleOptionChange(index, option.score)}
                />
                {option.answer}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {score !== null && (
        <div className="result">
          <h3>Your Score: {score}</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
