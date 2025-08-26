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
        <h3>Project 5:CyberPetz UX project </h3>
        <p>The fifth project based on Ux/UI,desktop view.</p>
        <div className="buttons">
          <a href="https://www.figma.com/proto/3SXbJNBZvq0pHYyn8G1ffb/cyber-petz?node-id=189-2043&starting-point-node-id=189%3A2043" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	  	<div className="project-card">
        <h3>Project 6: UX project, a travel app for public transport users in Gothenburg</h3>
        <p>First Ux/UI project with my classmates based on mobile view.</p>
        <div className="buttons">
          <a href="https://www.figma.com/proto/FR8YdMnqeQBX3TTfdO9n4p/Miniprojekt-UX?node-id=133-264&starting-point-node-id=133%3A264" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
	     <div className="project-card">
        <h3>Project 7:Bookit</h3>
        <p>Andra ux project with my classmates,desktop view."App, which helps users book meetings, find available times, reserve meeting rooms, and chat or share documents</p>
        <div className="buttons">
          
          <a href="https://www.figma.com/proto/f6PyimZQgn9BI5YKTSVOK7/Mighty-Zebras?node-id=417-468&starting-point-node-id=417%3A468" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	     <div className="project-card">
        <h3>Project 7: Basilika</h3>
        <p>A group project with my classmates based on react.</p>
        <div className="buttons">
          <a href="https://github.com/NinjaNean/basilika.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://ninjanean.github.io/basilika/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
	  <div className="project-card">
        <h3>Testing</h3>
        <p>Individual assignment focused on learning unit testing with Jest & write tests for webshop logic separated from the UI to practice thinking and acting like a tester..</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/exam-unit-test-malahat.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          
        </div>
      </div>
	    <div className="project-card">
        <h3>Testing</h3>
        <p>Individual assignment focused on writing E2E tests with Playwright for Läslistan, a book list app where users can mark favorite books.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/laslistan-e2e.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          
        </div>
      </div>
	     <div className="project-card">
        <h3>Project 8: Funzi-webbshop</h3>
        <p>The eightth project I wrote based on react.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/funzi-webbshop.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          <a href="https://malahatm.github.io/funzi-webbshop/" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
	  

	  
	  
    </div>
  );
}

export default Projects;
