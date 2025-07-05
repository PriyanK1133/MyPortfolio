import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiAngular, SiDotnet, SiMongodb, SiSocketdotio, SiFirebase } from 'react-icons/si';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "StudyNotion",
      description: "A comprehensive course management platform built with the MERN stack. Features include course creation, enrollment, progress tracking, and interactive learning modules.",
      image: "/Screenshot 2025-07-05 111406.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://studynotion-lyart.vercel.app/",
      githubLink: "https://github.com/PriyanK1133/StudyNotion",
      featured: true
    },
    {
      id: 2,
      title: "Pizza Shop Management",
      description: "Real-time pizza ordering and management system with live order tracking, inventory management, and customer notifications using SignalR.",
      image: "/1.png",
      technologies: ["ASP.NET Core", "SignalR", "PostgreSQL", "Angular"],
      liveLink: "#",
      githubLink: "https://github.com/PriyanK1133/Pizzashop",
      featured: true
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description: "Modern chat application with real-time messaging, user authentication, and responsive design. Built with Socket.io for instant communication.",
      image: "/Screenshot 2025-07-05 111543.png",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveLink: "https://chat-app-4ua0.onrender.com/",
      githubLink: "https://github.com/PriyanK1133/Chat-App",
      featured: true
    }
  ];

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'React': <FaReact className="tech-icon react" />,
      'Angular': <SiAngular className="tech-icon angular" />,
      'Node.js': <FaNodeJs className="tech-icon nodejs" />,
      'ASP.NET Core': <SiDotnet className="tech-icon dotnet" />,
      'MongoDB': <SiMongodb className="tech-icon mongodb" />,
      'PostgreSQL': <FaDatabase className="tech-icon postgresql" />,
      'Socket.io': <SiSocketdotio className="tech-icon socketio" />,
      'SignalR': <SiDotnet className="tech-icon signalr" />,
      'Firebase': <SiFirebase className="tech-icon firebase" />,
      'Express': <FaNodeJs className="tech-icon express" />
    };
    return iconMap[tech] || <FaReact className="tech-icon default" />;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work that showcases my skills</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/PriyanK1133/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;