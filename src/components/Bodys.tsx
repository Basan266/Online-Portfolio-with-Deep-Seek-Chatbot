
import { BookOpen, LayoutGrid, ChevronRight } from 'lucide-react';
import './bodys.css';

const projects = [
  {
    title: 'Juan Cast',
    description: 'Online voting platform',
    link: 'juancast.ph',
    url: 'https://play.google.com/store/apps/details?id=com.JuanCast.myapplication&hl=en'
  },
  {
    title: 'Calorie Tracker',
    description: 'To track calories using basic scanner',
    link: 'expo.dev',
    url:'https://expo.dev/accounts/basan26/projects/calorie-tracker/builds/0ea0f9cf-8f40-4418-90cf-9c7250a2e08f'
  },
  {
    title: 'Math Kingdom',
    description: 'Thesis in College',
    link: 'math-kingdom',
    url:'https://drive.google.com/file/d/1R5fSHGyY0CRugtx0UEcIQZmBGdWtPB8A/view'
  },

    {
    title: 'Youtube Downloader',
    description: 'Mp3 and Mp4',
    link: 'ytb-cnvrtr',
    url:'https://youtube-downloader-by-rlb.netlify.app/'
  },


];

const Bodys = () => {
  return (
    <div className="portfolio-container">
      {/* Left Section */}
      <div className="section-card left-panel">
        <div className="header-group">
          <BookOpen size={22}  className="icon-lucide" />
          <h2 className="main-title">Beyond Coding</h2>
        </div>
        <div className="description-text">
          <p>When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.</p>
          <p>I share my knowledge through content creation and community building.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="section-card right-panel">
        <div className="header-row">
          <div className="header-group">
            <LayoutGrid size={22}  className="icon-lucide" />
            <h2 className="main-title">Recent Projects</h2>
          </div>

        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              href={project.url} 
              key={index} 
              className="project-card-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <div className="project-info">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-sub">{project.description}</p>
                </div>
                <div className="link-badge">
                  {project.link} 
                  <ChevronRight size={14} style={{ marginLeft: '4px' }} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bodys;