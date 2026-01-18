import React from 'react';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Smartphone, 
  Link as LinkIcon, 
  Mail, 
  Calendar, 
  Users, 
  ChevronRight 
} from 'lucide-react';
import './footers.css';

const Footers = () => {
  return (
    <div className="footer-wrapper">
      <footer className="custom-footer">
        {/* Left Section: Social Links */}
        <div className="footer-column">
          <div className="section-header">
            <LinkIcon size={18} className="header-icon" />
            <h2 className="section-title">Social Links</h2>
          </div>
          
            <div className="social-list">
            {[
                {
                name: 'LinkedIn',
                icon: <Linkedin size={20} />,
                url: 'https://www.linkedin.com/in/robert-basan-308382296/',
                },
                {
                name: 'GitHub',
                icon: <Github size={20} />,
                url: 'https://github.com/basan266',
                },
                {
                name: 'Instagram',
                icon: <Instagram size={20} />,
                url: 'https://www.instagram.com/x_matt06y',
                },
            ].map((item) => (
                <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                >
                <span className="social-icon">{item.icon}</span>
                <span className="social-name">{item.name}</span>
                </a>
            ))}
            </div>

        </div>

        {/* Middle Section: Speaking */}
        <div className="footer-column">
          <div className="section-header">
            <Smartphone size={18} className="header-icon" />
            <h2 className="section-title">Speaking</h2>
          </div>
          
          <div className="speaking-box">
            <p className="speaking-text">
              Available for speaking at events about software development and emerging technologies.
            </p>
            <div className="get-in-touch">
              Get in touch <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Right Section: Contact & Info */}
        <div className="footer-column contact-column">
          {/* Email Card */}
          <div className="info-card">
            <div className="info-header">
              <Mail size={12} className="info-icon" />
              <span className="info-label">Email</span>
            </div>
            <p className="info-value">robertbasan26@gmail.com</p>
          </div>

          {/* Let's Talk Card */}
          <div className="info-card clickable">
            <div className="info-content">
              <div className="info-header">
                <Calendar size={12} className="info-icon" />
                <span className="info-label">Let's Talk</span>
              </div>
              <p className="info-value">Schedule a Call</p>
            </div>
            <ChevronRight size={18} className="arrow-icon" />
          </div>

          {/* Community Card */}
          <div className="info-card clickable">
            <div className="info-content">
              <div className="info-header">
                <Users size={12} className="info-icon" />
                <span className="info-label">Community</span>
              </div>
              <p className="info-value">Join Discussion</p>
            </div>
            <ChevronRight size={18} className="arrow-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;