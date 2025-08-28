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
      window.open("/Resume.pdf", "_blank");
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
            Hi, I’m <strong>Malahat Mortezavi</strong>, a junior front-end developer passionate
            about creating clean, responsive, and user-friendly websites. I
            enjoy turning creative ideas into interactive experiences using
            HTML, CSS, and JavaScript, and I’m constantly exploring new
            technologies to expand my skills.
          </p>
          <p>
            My expertise includes HTML5, CSS3, JavaScript (ES6+), React, and
            building responsive layouts with attention to detail. I’m also
            familiar with Git and collaborative workflows, ensuring smooth
            teamwork on projects.
          </p>
          <p>
            Currently, I’m learning TypeScript, Express, and Node.js to broaden
            my skills toward full-stack development.
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
