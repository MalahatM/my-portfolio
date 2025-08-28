import './projects.css';
import { AiOutlineHome } from 'react-icons/ai';

const projects = [
  {
    title: "Project 1: Conference 2024",
    description: "This is the first project I created using HTML and CSS for a frontend conference in Gothenburg.",
    github: "https://github.com/MalahatM/conference2024",
    view: "https://malahatm.github.io/conference2024/"
  },
  {
    title: "Project 2: Contact-App",
    description: "My second project, a contact app, developed with HTML, CSS, and JavaScript.",
    github: "https://github.com/MalahatM/contact-app.git",
    view: "https://malahatm.github.io/contact-app/"
  },
  {
    title: "Project 3: YumYum",
    description: "My third project: a website for YumYum restaurant, created with HTML, CSS, and JavaScript.",
    github: "https://github.com/MalahatM/yumyum.git",
    view: "https://malahatm.github.io/yumyum/"
  },
  {
    title: "Project 4: Product-project",
    description: "My fourth project: an online shop developed with HTML, CSS, and JavaScript.",
    github: "https://github.com/MalahatM/product-project.git",
    view: "https://malahatm.github.io/product-project/"
  },
  {
    title: "Project 5: CyberPetz UX project",
    description: "My fifth project: a UX/UI design optimized for desktop view.",
    github: null,
    view: "https://www.figma.com/proto/3SXbJNBZvq0pHYyn8G1ffb/cyber-petz?node-id=189-2043&starting-point-node-id=189%3A2043"
  },
  {
    title: "Project 6: Travel app UX project",
    description: "My UX/UI project, developed collaboratively with classmates for mobile screens.",
    github: null,
    view: "https://www.figma.com/proto/FR8YdMnqeQBX3TTfdO9n4p/Miniprojekt-UX?node-id=133-264&starting-point-node-id=133%3A264"
  },
  {
    title: "Project 7: Bookit",
    description: "Collaborated with classmates on my UX/UI project for desktop: a meeting management app.",
    github: null,
    view: "https://www.figma.com/proto/f6PyimZQgn9BI5YKTSVOK7/Mighty-Zebras?node-id=417-468&starting-point-node-id=417%3A468"
  },
  {
    title: "Project 8: Basilika",
    description: "Group project with classmates: a React-based website for a restaurant.",
    github: "https://github.com/NinjaNean/basilika.git",
    view: "https://ninjanean.github.io/basilika/"
  },
  {
    title: "Testing: Unit test project",
    description: "Individual assignment: practiced unit testing with Jest, writing tests for webshop logic.",
    github: "https://github.com/MalahatM/exam-unit-test-malahat.git",
    view: null
  },
  {
    title: "Testing: E2E Playwright project",
    description: "Individual assignment: wrote E2E tests with Playwright for Läslistan app.",
    github: "https://github.com/MalahatM/laslistan-e2e.git",
    view: null
  },
  {
    title: "Project 9: Funzi-webbshop",
    description: "Built my eighth project with React: an online platform for summer toys.",
    github: "https://github.com/MalahatM/funzi-webbshop.git",
    view: "https://malahatm.github.io/funzi-webbshop/"
  }
];

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-title">
        <h2>All of my Projects</h2>
        <a href="/" className="home-icon" title="Back to Home">
          <AiOutlineHome />
        </a>
      </div>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="github-button">
                GitHub
              </a>
            )}
            {project.view && (
              <a href={project.view} target="_blank" rel="noreferrer" className="view-button">
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
