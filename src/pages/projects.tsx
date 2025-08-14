import './Projects.css';

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <h2>All of my Projects</h2>
      <div className="project-card">
        <h3>Project 1: Conference 2024</h3>
        <p>The first project I wrote with HTML and CSS for a conference on frontends in Gothenburg.</p>
        <p>
          <a href="https://github.com/MalahatM/conference2024" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
