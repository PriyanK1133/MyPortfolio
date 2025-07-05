import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/PRIYANK_RESUME (2).pdf';
    link.download = 'Priyank_Chauhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="highlight">Priyank Chauhan</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I’m a passionate full-stack developer focused on crafting innovative and scalable web applications using modern technologies like 
              <span className="tech-highlight"> Angular</span>, 
              <span className="tech-highlight"> React</span>, 
              <span className="tech-highlight"> ASP.NET</span>, and the 
              <span className="tech-highlight"> MERN stack</span>. 
              I specialize in building real-time, performance-driven solutions with clean and maintainable code.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Projects</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                <span>View My Work</span>
              </button>
              <button onClick={downloadResume} className="btn btn-secondary">
                <FaDownload />
                <span>Download Resume</span>
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/PriyanK1133/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/priyank-chauhan-981784212/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/priyank.303/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/priyankp3.jpg" alt="Priyank Chauhan" className="profile-image" />
              <div className="image-overlay"></div>
              <div className="floating-elements">
                <div className="floating-element react">⚛️</div>
                <div className="floating-element angular">🅰️</div>
                <div className="floating-element node">🟢</div>
                <div className="floating-element code">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;