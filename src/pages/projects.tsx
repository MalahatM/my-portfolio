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
        <p>This is the first project I created using HTML and CSS for a frontend conference in Gothenburg.</p>
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
        <p>My second project, a contact app, developed with HTML, CSS, and JavaScript.</p>
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
        <p>My third project: a website for YumYum restaurant, created with HTML, CSS, and JavaScript.</p>
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
        <p>My fourth project: an online shop developed with HTML, CSS, and JavaScript.</p>
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
        <p>My fifth project: a UX/UI design optimized for desktop view.</p>
        <div className="buttons">
          <a href="https://www.figma.com/proto/3SXbJNBZvq0pHYyn8G1ffb/cyber-petz?node-id=189-2043&starting-point-node-id=189%3A2043" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	  	<div className="project-card">
        <h3>Project 6: UX project, a travel app for public transport users in Gothenburg</h3>
        <p>My UX/UI project, developed collaboratively with classmates for mobile screens.</p>
        <div className="buttons">
          <a href="https://www.figma.com/proto/FR8YdMnqeQBX3TTfdO9n4p/Miniprojekt-UX?node-id=133-264&starting-point-node-id=133%3A264" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
	     <div className="project-card">
        <h3>Project 7:Bookit</h3>
        <p>Collaborated with classmates on my UX/UI project for desktop: a meeting management app for scheduling, room booking, and document sharing.</p>
        <div className="buttons">
          
          <a href="https://www.figma.com/proto/f6PyimZQgn9BI5YKTSVOK7/Mighty-Zebras?node-id=417-468&starting-point-node-id=417%3A468" target="_blank" rel="noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>

	     <div className="project-card">
        <h3>Project 8: Basilika</h3>
        <p>Group project with classmates: a React-based website for a restaurant.</p>
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
        <p>Individual assignment: practiced unit testing with Jest, writing tests for webshop logic separate from the UI.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/exam-unit-test-malahat.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          
        </div>
      </div>
	    <div className="project-card">
        <h3>Testing</h3>
        <p>Individual assignment: wrote E2E tests with Playwright for Läslistan, a book list app where users can mark favorite books.</p>
        <div className="buttons">
          <a href="https://github.com/MalahatM/laslistan-e2e.git" target="_blank" rel="noreferrer" className="github-button">
            GitHub
          </a>
          
        </div>
      </div>
	     <div className="project-card">
        <h3>Project 9: Funzi-webbshop</h3>
        <p>Built my eighth project with React: an online platform for summer toys.</p>
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
