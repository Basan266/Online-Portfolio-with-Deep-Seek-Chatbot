import "./Header.css";
import { useState } from "react";
import profilePic from "../assets/profile.jpg"; 
import HoverprofilePic from "../assets/smiling.png"
import ThemeToggle from "../ThemeToggle";
// Import natin ang mga icons na kahawig ng nasa images mo
import { MapPin, BadgeCheck, Trophy, Calendar, Mail, Users, ChevronRight, ChevronDown } from "lucide-react";

//calendy
const handleSchedule = () => {
  // Bubuksan nito ang link sa bagong tab
  window.open('https://calendly.com/robertbasan26/30min?back=1&month=2026-01', '_blank', 'noreferrer,noopener');
};

const handleSendEmail = () => {
  // Palitan ang 'your-email@example.com' ng totoong email mo
  window.location.href = "mailto:robertbasan26@gmail.com?subject=Inquiry";
};


function Header() {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="header-outer-wrapper"> {/* Bagong div para sa global sizing */}
      <div className="header">
        <img 
          src={isHovered ? HoverprofilePic : profilePic} 
          alt="Profile" 
          className="profile-pic"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div className="header-info">
          <h1 style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%' // Gumamit ng comma (,) hindi semicolon (;)
          }}>
            <span className="Name" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Robert Basan
              <BadgeCheck size={18} color="#ffffff" fill="#1d9bf0" strokeWidth={2} />
            </span>

            <div style={{ display: 'flex' }}>
              <ThemeToggle />
            </div>
          </h1>
          
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} /> Cainta Rizal, Philippines
          </h2>

          <div className="mid-header"></div>

          <div className="header-buttons">
            <p>Software Engineer</p>
            <button className="button primary">
              <div className="btn-left-content">
                <Trophy size={14} fill="#ffffff" color="#ffffff" />
                <span>Cum-Laude STI Ortigas-Cainta</span>
              </div>
              <span className="divider"></span>
              <ChevronDown size={14}/>
            </button>

            <button className="button secondary" onClick={handleSchedule}>
              <Calendar size={16} /> Schedule a Call <ChevronRight size={16} />
            </button>
            
            <button className="button tertiary" onClick={handleSendEmail}>
              <Mail size={16} /> Send Email
            </button>
            
            <button className="button quarterlys community-btn">
              <div className="btn-content-left">
                <Users size={18} />
                <span>Visit my community and join the discussion here!</span>
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;