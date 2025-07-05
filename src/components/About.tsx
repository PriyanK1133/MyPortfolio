import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About: React.FC = () => {
  const frontendSkills = [
    'Angular', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap', 'Tailwind CSS'
  ];

  const backendSkills = [
    'ASP.NET Core', 'C#', 'Node.js', 'Express.js', 'SignalR', 'Socket.io'
  ];

  const databaseSkills = [
    'PostgreSQL', 'Firebase', 'MongoDB'
  ];

  const tools = [
    'Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my skills and experience</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I'm a dedicated Full Stack Developer with a strong foundation in modern web technologies. 
                During my internship at <strong>Tatvasoft</strong>, I worked on real-time applications, 
                including a dynamic Pizza Shop system and a full-featured Course Management platform.
              </p>
              <p>
                I’m passionate about building clean, scalable, and user-centric solutions while continuously 
                exploring new tools and frameworks. My goal is to develop applications that are not only technically sound 
                but also deliver seamless user experiences.
              </p>
            </div>


            <div className="experience-card">
            <h3>Experience Highlights</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Software Developer Intern</h4>
                {/* <span className="experience-duration">6 Months</span> */}
              </div>
              <p className="experience-company">Tatvasoft</p>
              <ul className="experience-details">
                <li>Designed and developed a real-time Pizza Shop management system with inventory and order tracking features</li>
                <li>Created a full-fledged Course Management platform with authentication and role-based access</li>
                <li>Implemented real-time communication using <strong>SignalR</strong> for seamless user interaction</li>
                <li>Worked extensively with the <strong>Angular</strong> and <strong>.NET Core</strong> in a structured, team-based environment</li>
              </ul>
            </div>
          </div>

          </div>

          <div className="skills-section">
            <div className="skill-category">
              <div className="skill-header">
                <FaCode className="skill-icon" />
                <h3>Frontend</h3>
              </div>
              <div className="skill-tags">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag frontend">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <FaServer className="skill-icon" />
                <h3>Backend</h3>
              </div>
              <div className="skill-tags">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag backend">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <FaDatabase className="skill-icon" />
                <h3>Database</h3>
              </div>
              <div className="skill-tags">
                {databaseSkills.map((skill, index) => (
                  <span key={index} className="skill-tag database">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <FaCode className="skill-icon" />
                <h3>Tools & Others</h3>
              </div>
              <div className="skill-tags">
                {tools.map((tool, index) => (
                  <span key={index} className="skill-tag tools">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;