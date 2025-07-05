import React from 'react';
import { FaDownload, FaEye, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const Resume: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/PRIYANK_RESUME (2).pdf';
    link.download = 'Priyank_Chauhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewResume = () => {
    window.open('/PRIYANK_RESUME (2).pdf', '_blank');
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Download or view my complete resume</p>
        </div>

        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-card">
              <div className="resume-header">
                <div className="resume-icon">
                  <FaCertificate />
                </div>
                <h3>Priyank Chauhan</h3>
                <p>Full Stack Developer</p>
              </div>

              <div className="resume-highlights">
                <div className="highlight-item">
                  <FaGraduationCap className="highlight-icon" />
                  <div>
                    <h4>Education</h4>
                    <p>Information Technology</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaBriefcase className="highlight-icon" />
                  <div>
                    <h4>Experience</h4>
                    <p>6 Months at Tatvasoft</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCertificate className="highlight-icon" />
                  <div>
                    <h4>Specialization</h4>
                    <p>Full Stack Development</p>
                  </div>
                </div>
              </div>

              <div className="resume-actions">
                <button onClick={viewResume} className="btn btn-outline">
                  <FaEye />
                  <span>View Resume</span>
                </button>
                <button onClick={downloadResume} className="btn btn-primary">
                  <FaDownload />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>

          <div className="resume-details">
            <div className="detail-section">
              <h3>Technical Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <strong>Frontend:</strong> Angular, React, JavaScript, TypeScript, HTML5, CSS3
                </div>
                <div className="skill-item">
                  <strong>Backend:</strong> ASP.NET Core, C#, Node.js, SignalR, Socket.io
                </div>
                <div className="skill-item">
                  <strong>Database:</strong> PostgreSQL, MongoDB, Firebase
                </div>
                <div className="skill-item">
                  <strong>Tools:</strong> Git, GitHub, Visual Studio, VS Code
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Key Projects</h3>
              <ul className="project-list">
                <li>
                  <strong>StudyNotion:</strong> Course management platform with MERN stack
                </li>
                <li>
                  <strong>Pizza Shop System:</strong> Real-time ordering system with SignalR
                </li>
                <li>
                  <strong>Chat Application:</strong> Real-time messaging with Socket.io
                </li>
              </ul>
            </div>
            <div className="detail-section">
              <h3>Experience Highlights</h3>
              <ul className="experience-list">
                <li>Completed a 6-month internship at <strong>Tatvasoft</strong> as a Software Developer Intern</li>
                <li>Developed real-time web applications using ASP.NET Core, SignalR, and the MERN stack</li>
                <li>Participated in the Student Startup and Innovation Policy (SSIP) program with a tech-based solution</li>
                <li>Gained hands-on experience in building scalable and interactive systems</li>
                <li>Collaborated in an Agile development environment with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;