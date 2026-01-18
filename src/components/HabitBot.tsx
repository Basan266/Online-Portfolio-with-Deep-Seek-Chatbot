import React, { useState, useRef, useEffect } from 'react';
import { useHabitChat } from '../hooks/useHabitChat';
import { MessageCircle, SendHorizontal, X } from 'lucide-react'; 
import robertProfile from '../assets/profile.jpg';
import './HabitBot.css';

export const HabitBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, isLoading } = useHabitChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="chat-widget-wrapper">
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <div className="user-info">
              <img src={robertProfile} alt="Robert" />
              <div>
                <div className="user-name">Chat with Robert</div>
                <div className="user-status">● Online</div>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-box" ref={scrollRef}>
            {/* Initial Bot Message */}
            <div className="message-wrapper align-start">
            <div className="bot-profile-wrapper">
                <img src={robertProfile} alt="Robert" className="bot-avatar-small" />
                <span className="sender-name">Robert Basan</span>
            </div>
            <div className="message bot-message">
                Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming or my experiences!
            </div>
            </div>

          {messages.map((msg, i) => (
            <div key={i} className={`message-wrapper ${msg.role === 'user' ? 'align-end' : 'align-start'}`}>
              {msg.role === 'assistant' && (
                <div className="bot-profile-wrapper">
                  <img src={robertProfile} alt="Robert" className="bot-avatar-small" />
                  <span className="sender-name">Robert Basan</span>
                </div>
              )}
              <div className={`message ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}>
                {msg.content}
              </div>
            </div>
          ))}

            {isLoading && <div className="loading-text" style={{color: '#768390', fontSize: '12px'}}>Typing...</div>}
          </div>

          <form className="input-area" onSubmit={handleSend}>
            <div className="input-wrapper">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <button type="submit" className="send-btn" disabled={isLoading}>
                <SendHorizontal size={20} />
              </button>
            </div>
            <div className="footer-note">
              <span>Ask me about programming, web dev, or tech!</span>
              <span>{input.length}/1000</span>
            </div>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className="chat-trigger-btn" onClick={() => setIsOpen(true)}>
          <MessageCircle size={20} className="chat-icon-animated" />
          <span>Chat with Robert</span>
        </button>
      )}
    </div>
  );
};