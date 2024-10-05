// src/components/Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import './Chatbot.css'; // Assuming you'll add your custom styling

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatWindowRef = useRef(null);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();

    const newMessages = [...messages, { sender: "user", text: question }];
    setMessages(newMessages);
    setQuestion(""); // Clear the input field

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA_j28I91BmKFjaWHATCzt5I2OjpWubCyc`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const botReply = response.data.candidates[0].content.parts[0].text;
      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.log(error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry - Something went wrong. Please try again!" },
      ]);
    }

    setGeneratingAnswer(false);
  }

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-app-container">
      <header className="chat-header">Your Companion</header>

      <div ref={chatWindowRef} className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-wrapper ${message.sender === "user" ? "user-message" : "bot-message"}`}
          >
            <div className="message-bubble">
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {generatingAnswer && (
          <div className="message-wrapper bot-message">
            <div className="message-bubble typing-indicator">
              <div className="dots"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={generateAnswer} className="input-area">
        <textarea
          required
          className="chat-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          disabled={generatingAnswer}
        ></textarea>
        <button
          type="submit"
          className={`send-button ${generatingAnswer ? "disabled" : ""}`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
