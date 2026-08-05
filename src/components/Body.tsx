
import './Body.css';
import { Briefcase, Code2, User } from 'lucide-react';

const Body = () => {
  const techStack = {
    Mobile: ['Java', 'Android Studio', 'XML', 'Firebase'],
    Web: ['HTML', 'CSS', 'Javascript', 'Responsive Design'],
    'Backend & Cloud': ['GitHub Actions', 'VMWARE', 'Expo Go', 'Firebase Backend'],
    Monetization: ['Google Admob', 'Unity Ads'],
    Deployment: ['Google Play Release Management'],
  };

  const experiences = [
    { title: 'Android Software Engineer', company: 'EMBM OPC', year: '2026',current: true },
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
            I’m a Software Engineer focused on Android and web development. 
            I build mobile applications using Java, XML, Android Studio, and 
            Firebase, with experience in authentication, real-time databases, 
            cloud storage, ads integration, testing, deployment, and app maintenance.
          </p>
          <p>
            I also create responsive websites using HTML, CSS, and JavaScript. 
            My work includes publishing and managing apps through Google Play Console, 
            integrating Google AdMob and Unity Ads, and maintaining production-ready applications.
          </p>
        </section>

        <section className="card tech-stack-section">
          <div className="card-header space-between">
            <div className="header-title">
              <Code2 size={16} />
              <h2>Tech Stack</h2>
            </div>
          
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