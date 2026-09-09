
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Chat.css";

function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm MindCare AI 🌿. I'm here to listen and support you. How are you feeling today?",
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    // Temporary AI response
    setTimeout(() => {
      const aiMessage = {
        sender: "ai",
        text: "Thank you for sharing that with me. It sounds like you're going through something difficult. Take a moment to breathe and be kind to yourself. 🌱",
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  return (
    <div className="chat-page">

      {/* Navbar */}
      <nav className="chat-navbar">

        <Link to="/dashboard" className="chat-logo">
          MindCare AI
        </Link>

        <div className="chat-nav-links">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/chat" className="active">
            AI Chat
          </Link>

          <Link to="/assessment">
            Assessment
          </Link>

          <Link to="/mood">
            Mood
          </Link>

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </div>

      </nav>


      {/* Chat Container */}
      <main className="chat-container">

        <div className="chat-header">

          <div className="ai-avatar">
            🌿
          </div>

          <div>
            <h1>MindCare AI</h1>

            <p>
              Your supportive AI companion
            </p>
          </div>

          <div className="online-status">
            <span></span>
            Available
          </div>

        </div>


        {/* Safety Notice */}
        <div className="chat-notice">
          <span>💚</span>

          <p>
            This AI provides general emotional support and
            information. It is not a replacement for a qualified
            mental health professional.
          </p>
        </div>


        {/* Messages */}
        <div className="messages-area">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`message-row ${msg.sender}`}
            >

              {msg.sender === "ai" && (
                <div className="small-avatar">
                  🌿
                </div>
              )}

              <div className="message-bubble">
                {msg.text}
              </div>

            </div>

          ))}

        </div>


        {/* Suggested Questions */}
        <div className="suggestions">

          <button
            onClick={() =>
              setMessage("I'm feeling stressed about my studies.")
            }
          >
            📚 I'm feeling stressed
          </button>

          <button
            onClick={() =>
              setMessage("I feel overwhelmed today.")
            }
          >
            🌱 I feel overwhelmed
          </button>

          <button
            onClick={() =>
              setMessage("I want some study tips.")
            }
          >
            ✨ Give me study tips
          </button>

        </div>


        {/* Message Input */}
        <form
          className="chat-input-area"
          onSubmit={sendMessage}
        >

          <input
            type="text"
            placeholder="Type what's on your mind..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            Send
          </button>

        </form>

        <p className="chat-footer">
          MindCare AI • A student well-being support platform
        </p>

      </main>

    </div>
  );
}

export default Chat;

