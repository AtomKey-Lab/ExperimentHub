import React, { useState, useRef, useEffect } from "react";
import "./GeminiChat.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hey there!" },
    { type: "bot", text: "What should I call you?" }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);

  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0lkkvJO4I4FjJNm6i23X9ZrcoAereUAM";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    if (!userName && showWelcome === false) {
      setUserName(inputText);
      setMessages([...messages, { type: "user", text: inputText }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: `Great to meet you, ${inputText}! How can I help you today?`
          }
        ]);
      }, 500);
      setInputText("");
      return;
    }

    const updatedMessages = [...messages, { type: "user", text: inputText }];
    setMessages(updatedMessages);
    setInputText("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: inputText }]
            }
          ]
        })
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      const generatedText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I couldn't generate a response. Please try again.";
      
      setMessages([...updatedMessages, { type: "bot", text: generatedText }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { type: "bot", text: "Sorry, I encountered an error. Please try again later." }
      ]);
    }

    setLoading(false);
  };

  const startChat = () => {
    setShowWelcome(false);
  };

  const getStarted = () => {
    return (
      <div className="get-started-container">
        <div className="get-started-logo-container">
          <div className="logo-wrapper">
            <div className="logo-bg"></div>
            <div className="logo-inner">
              <div className="logo-content">
                <div className="circle mr"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="get-started-footer">
          <button onClick={startChat} className="get-started-button">
            Get Started
          </button>
          <p className="get-started-text">
            Already have an account?{" "}
            <a href="#" className="login-link">
              Log In
            </a>
          </p>
        </div>
      </div>
    );
  };

  const chatInterface = () => {
    return (
      <div className="chat-interface">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message-row ${message.type}`}>
              {message.type === "bot" && (
                <div className="bot-icon">
                  <div className="bot-icon-bg">
                    <div className="bot-icon-inner">
                      <div className="small-circle mr-px"></div>
                      <div className="small-circle"></div>
                    </div>
                  </div>
                </div>
              )}
              <div className={message.type === "user" ? "user-message" : "bot-message"}>
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="loading-container">
              <div className="bot-icon">
                <div className="bot-icon-bg">
                  <div className="bot-icon-inner">
                    <div className="small-circle mr-px"></div>
                    <div className="small-circle"></div>
                  </div>
                </div>
              </div>
              <div className="loading-bubble">
                <div className="loading-dots">
                  <div className="loading-dot"></div>
                  <div className="loading-dot delay-100"></div>
                  <div className="loading-dot delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chat-input-form">
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              placeholder={userName ? "Type a message..." : "Your name"}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="send-button" disabled={!inputText.trim()}>
              <svg xmlns="http://www.w3.org/2000/svg" className="send-icon" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="gemini-chat-container">
      {showWelcome ? getStarted() : chatInterface()}
    </div>
  );
};

export default ChatBot;
