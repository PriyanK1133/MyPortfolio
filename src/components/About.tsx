import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About: React.FC = () => {
  const frontendSkills = [
    'Angular', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'
  ];

  const backendSkills = [
    'ASP.NET Core', 'C#', 'Node.js', 'SignalR', 'Socket.io'
  ];

  const databaseSkills = [
    'PostgreSQL', 'Firebase', 'MongoDB'
  ];

  const tools = [
    'Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Docker'
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
                I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
                During my 6-month internship at <strong>Tatvasoft</strong>, I gained hands-on experience 
                building real-time applications including a comprehensive Pizza Shop system and a 
                Course Management platform.
              </p>
              <p>
                I love creating efficient, scalable solutions and staying up-to-date with the latest 
                technologies in web development. My goal is to build applications that not only meet 
                technical requirements but also provide exceptional user experiences.
              </p>
            </div>

            <div className="experience-card">
              <h3>Experience Highlights</h3>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Full Stack Developer Intern</h4>
                  <span className="experience-duration">6 Months</span>
                </div>
                <p className="experience-company">Tatvasoft</p>
                <ul className="experience-details">
                  <li>Developed real-time Pizza Shop management system</li>
                  <li>Built comprehensive Course Management platform</li>
                  <li>Implemented real-time features using SignalR</li>
                  <li>Worked with MERN stack and .NET Core</li>
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