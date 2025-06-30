import { useState } from 'react';
import './Home.css';

function Home() {
  const [shakingButton, setShakingButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setShakingButton(index);
    setTimeout(() => setShakingButton(null), 400); 
  };

  const buttons = ['Resume', 'Projects', 'About', 'Contact'];

  return (
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
  );
}

export default Home;
