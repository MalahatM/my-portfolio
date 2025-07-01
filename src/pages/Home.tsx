import { useState } from 'react';
import './Home.css';

function Home() {
  const [shakingButton, setShakingButton] = useState<number | null>(null);

  const buttons = ['Resume', 'Projects', 'About', 'Contact'];

  const handleClick = (index: number) => {
    setShakingButton(index);

    if (buttons[index] === 'Contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setTimeout(() => setShakingButton(null), 400);
  };

  return (
    <>
      <div className="home-container">
        <div className="image-wrapper">
          <img src="/IMG_9341.JPG" alt="Profile" className="profile-image" />
        </div>

        <div className="text-wrapper">
          <h1>Malahat Mortezavi</h1>
          <p>Junior front-end developer with a strong motivation to learn and grow</p>

          <div className="button-group">
            {buttons.map((label, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={shakingButton === index ? 'shake' : ''}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="contact-section">
        <h2>Let's Connect</h2>
        <p>Email: <a href="mailto:malahat.m82@gmail.com">malahat.m82@gmail.com</a></p>
        <p>Mob: +46 73 749 2910</p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/malahat-mortezavi-72b910334"
            target="_blank"
            rel="noreferrer"
          >
            Malahat Mortezavi
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/MalahatM" target="_blank" rel="noreferrer">
            MalahatM
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
