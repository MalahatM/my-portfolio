import './Projects.css';
import { AiOutlineHome } from 'react-icons/ai';

function Projects() {
   return (
    <div id="projects" className="projects-section">
      <div className="projects-title">
        <h2>All of my Projects</h2>
        <a href="/" className="home-icon" title="Back to Home">
          <AiOutlineHome />
        </a>
      </div>
	  

      <div className="project-card">
        <h3>Project 1: Conference 2024</h3>
        <p>The first project I wrote with HTML and CSS for a conference on frontends in Gothenburg.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/conference2024" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://malahatm.github.io/conference2024/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <h3>Project 2: Contact-App</h3>
        <p>The second project I wrote with HTML, CSS and JS for an App.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/contact-app.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://malahatm.github.io/contact-app/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

      <div className="project-card">
        <h3>Project 3: YumYum</h3>
        <p>The third project I wrote with HTML, CSS and JS for YumYum restaurant.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/yumyum.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://malahatm.github.io/yumyum/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	   <div className="project-card">
        <h3>Project 4: Product-project</h3>
        <p>The fourth project I wrote with HTML, CSS and JS for an online-shop.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/product-project.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://malahatm.github.io/product-project/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	<div className="project-card">
        <h3>Project 5: UX project</h3>
        <p>The fifth project based on Ux/UI</p>
        <div className="buttons">
          <a href="https://www.figma.com/proto/3SXbJNBZvq0pHYyn8G1ffb/cyber-petz?node-id=189-2043&starting-point-node-id=189%3A2043" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
	  //TODO
    </div>
  );
}

export default Projects;
