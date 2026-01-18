import React from 'react';
import './Body.css';
import { Briefcase, Code2, User, ChevronRight } from 'lucide-react';

const Body = () => {
  const techStack = {
    Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind'],
    Backend: ['Node.js', 'Python', 'PHP', 'Laravel', 'MySQL', 'Firebase'],
    'DevOps & Cloud': ['GitHub Actions', 'VMWARE', 'Expo Go']
  };

  const experiences = [
    { title: 'Software Engineer', company: 'EMBM OPC', year: '2026',current: true },
    { title: 'BS Information Technology', company: 'STI Ortigas-Cainta', year: '2023' },
    { title: 'Hello World! 👋', company: 'Wrote my first line of code', year: '2017' }
  ];

  return (
    <div className="body-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <section className="card about-section">
          <div className="card-header">
            <User size={16} />
            <h2>About</h2>
          </div>
          <p>
            I'm a full-stack software engineer specializing in developing solutions with 
            JavaScript, Python, and PHP. I work on projects including building modern web 
            applications, mobile apps, search engine optimization, digital marketing, and 
            making code tutorials.
          </p>
          <p>
            I've helped startups and MSMEs grow and streamline their processes through 
            software solutions. I've also built a community of over 200,000 developers sharing 
            knowledge and mentorship.
          </p>
          <p>
            Lately, I've been diving deeper into the world of artificial intelligence, focusing on 
            integrating AI tools and techniques into modern applications.
          </p>
        </section>

        <section className="card tech-stack-section">
          <div className="card-header space-between">
            <div className="header-title">
              <Code2 size={16} />
              <h2>Tech Stack</h2>
            </div>
            <button className="view-all-btn">View All <ChevronRight size={14} /></button>
          </div>
          
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="tech-group">
              <h3>{category}</h3>
              <div className="tags">
                {skills.map(skill => <span key={skill} className="tag">{skill}</span>)}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <section className="card experience-section">
          <div className="card-header">
            <Briefcase size={16} />
            <h2>Experience</h2>
          </div>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className={`timeline-dot ${exp.current ? 'active' : ''}`}></div>
                <div className="timeline-content">
                  <div className="exp-info">
                    <h4>{exp.title}</h4>
                    <p>{exp.company}</p>
                  </div>
                  <span className="exp-year">{exp.year}</span>
                </div>
              </div>
            ))}
          </div>


        </section>
      </div>
    </div>
  );
};

export default Body;