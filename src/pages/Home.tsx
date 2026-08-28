import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/IMG_9341.jpg";
import "./Home.css";

function Home() {
  const [shakingButton, setShakingButton] = useState<number>(-1);
  const navigate = useNavigate();

  const buttons = ["Resume", "Projects", "About", "Contact"];

  const handleClick = (index: number) => {
    setShakingButton(index);

    if (buttons[index] === "Resume") {
      window.open("/my-portfolio/resume.pdf", "_blank");
    } else if (buttons[index] === "Projects") {
      navigate("/projects");
    } else if (buttons[index] === "About") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (buttons[index] === "Contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    setTimeout(() => setShakingButton(-1), 400);
  };

  return (
    <>
      <div className="home-container">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="text-wrapper">
          <h1>Malahat Mortezavi</h1>
          <p>
            Junior front-end developer with a strong motivation to learn and
            grow
          </p>
          <div className="button-group">
            {buttons.map((label, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={shakingButton === index ? "shake" : ""}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Malahat Mortezavi</strong>, a junior front-end developer currently studying <strong>Software Development with a focus on .Net</strong>
            about creating clean, responsive, and user-friendly websites. I enjoy turning ideas into responsive, user-friendly websites and understanding how the systems behind them work.
          </p>
          <p>
            My experience includes HTML, CSS, JavaScript, React, and TypeScript, with a focus on clear layouts and intuitive interfaces. Through my projects, I’ve also gained practical experience with Node.js and Express, expanding my skills beyond the front end.
          </p>
          <p>
           Through my .NET studies, I’m continuing to develop my software development skills and work toward building complete applications. I’m looking for opportunities to contribute to a team, learn from experienced developers, and bring my attention to detail to real-world projects.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2>Let's Connect</h2>
        <p>
          Email:{" "}
          <a href="mailto:malahat.m82@gmail.com">
            malahat.m82@gmail.com
          </a>
        </p>
        <p>Mob: +46 73 749 2910</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/malahat-mortezavi-72b910334"
            target="_blank"
            rel="noreferrer"
          >
            Malahat Mortezavi
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/MalahatM"
            target="_blank"
            rel="noreferrer"
          >
            MalahatM
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
