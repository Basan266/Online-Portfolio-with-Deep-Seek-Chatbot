import React, { useState, useEffect } from 'react';
import { BadgeCheck, MessageSquareQuote, ChevronRight} from 'lucide-react';
import './footer.css';

const certifications = [
  { title: 'Network Foundations', issuer: 'Huawei', url: 'https://drive.google.com/file/d/13lMb_UBwUEFHZyJka9IDCxNP7TvQgYDY/view' },
  { title: 'Service Operations', issuer: 'Metrobank', url: 'https://drive.google.com/file/d/1r4oALr6FRzxdsa2WmPkcGMmo-f4ptuH4/view' },
  { title: 'Logistics and Financials', issuer: 'Sap Business One', url: 'https://drive.google.com/file/d/1_rcA9SXFNA21mCnmG8ekSE01jLRtnJLW/view' },
  { title: 'Database Foundation', issuer: 'Oracle', url: 'https://drive.google.com/file/d/13lMb_UBwUEFHZyJka9IDCxNP7TvQgYDY/view' },
];

const recommendations = [
  {
    quote: "Robert is an intelligent software engineer. He takes lead during software development and can handle and manage teams well.",
    author: "Ken Gorro",
    role: "Senior Developer at Fullscale"
  },
  {
    quote: "Robert's ability to solve complex problems is impressive. He consistently delivers high-quality work and is a great asset to any team.",
    author: "Maria Santos",
    role: "Project Manager"
  },
  {
    quote: "A very dedicated professional. Robert has a deep understanding of modern technologies and always keeps himself updated.",
    author: "John Doe",
    role: "Tech Lead"
  },
  {
    quote: "Working with Robert was a great experience. He is proactive, highly skilled, and very reliable in meeting deadlines.",
    author: "Sarah Jenkins",
    role: "CEO at TechFlow"
  }
];

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic: 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clean up para hindi mag-overlap ang timers
  }, []);

  return (
    <footer className="footer-container">
      {/* Left Section: Certifications */}
      <div className="footer-card cert-section">
        <div className="footer-header">
          <div className="header-title-group">
            <BadgeCheck size={22} className="footer-icon" />
            <h2 className="footer-title">Recent Certifications</h2>
          </div>
        </div>

        <div className="cert-list">
        {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
            {cert.url ? (
                /* Kung may URL, gawing clickable link na may Icon */
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                <div className="cert-content">
                    <h4 className="cert-name">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                </div>
                {/* Added the icon here */}
                
                </a>
            ) : (
                /* Kung walang URL, normal na text lang */
                <div className="cert-content">
                <h4 className="cert-name">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                </div>
            )}
            </div>
        ))}
        </div>
        
      </div>

      {/* Right Section: Recommendations */}
      <div className="footer-card recommendation-section">
        <div className="footer-header">
          <div className="header-title-group">
            <MessageSquareQuote size={22} className="footer-icon" />
            <h2 className="footer-title">Recommendations</h2>
          </div>
        </div>

        {/* Ang 'key' dito ang nag-ti-trigger ng CSS animation tuwing nagbabago ang currentIndex */}
        <div className="recommendation-content fade-in" key={currentIndex}>
          <p className="quote">
            “{recommendations[currentIndex].quote}”
          </p>
          
          <div className="divider"></div>

          <div className="author-info">
            <h4 className="author-name">{recommendations[currentIndex].author}</h4>
            <p className="author-role">{recommendations[currentIndex].role}</p>
          </div>

          <div className="pagination">
            {recommendations.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={{ cursor: 'pointer' }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;