// src/comp/Content.jsx
import React from 'react';
import './Content.css'; // Create a CSS file for styles

const articles = [
  {
    title: "10 Ways to Boost Your Mood",
    link: "https://example.com/article1",
    description: "Discover simple ways to enhance your mood.",
  },
  {
    title: "The Power of Positive Thinking",
    link: "https://example.com/article2",
    description: "Learn how positive thinking can transform your life.",
  },
  // Add more articles as needed
];

const podcasts = [
  {
    title: "Happy Place",
    link: "https://example.com/podcast1",
    description: "A podcast exploring happiness and well-being.",
  },
  {
    title: "The Mindful Kind",
    link: "https://example.com/podcast2",
    description: "Tips on mindfulness and self-care.",
  },
  // Add more podcasts as needed
];

const Content = () => {
  return (
    <div className="content-container">
      <h1>Articles & Podcasts to Lighten Your Mood</h1>
      
      <div className="section">
        <h2>Articles</h2>
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="content-item">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
              </a>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Podcasts</h2>
        <ul>
          {podcasts.map((podcast, index) => (
            <li key={index} className="content-item">
              <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                <h3>{podcast.title}</h3>
              </a>
              <p>{podcast.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
