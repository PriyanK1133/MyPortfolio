import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 onClick={scrollToTop} className="footer-logo">
                Priyank<span className="logo-dot">.</span>
              </h3>
              <p>Full Stack Web Developer passionate about creating innovative solutions</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Projects</h4>
                <ul>
                  <li><a href="https://studynotion-lyart.vercel.app/" target="_blank" rel="noopener noreferrer">StudyNotion</a></li>
                  <li><a href="https://github.com/PriyanK1133/Pizzashop" target="_blank" rel="noopener noreferrer">Pizza Shop</a></li>
                  <li><a href="https://chat-app-4ua0.onrender.com/" target="_blank" rel="noopener noreferrer">Chat App</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
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
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p>
                © {currentYear} Priyank Chauhan. Made with <FaHeart className="heart" /> using React & TypeScript
              </p>
              <p className="footer-note">
                Available for freelance opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;