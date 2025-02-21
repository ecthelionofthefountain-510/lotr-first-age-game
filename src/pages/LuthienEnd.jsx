import React from 'react';
import { useNavigate } from 'react-router-dom';

const LuthienEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Lúthien's Triumph</h1>
      <img src="/assets/story-scenes/beren-luthien-escape.png" alt="Lúthien before Morgoth" className="end-image" />
      <p>Using her song and power, Lúthien puts Morgoth to sleep and secures the Silmaril. The darkness trembles before her light.</p>
      <p>Beren and Lúthien escape, forever altering the fate of Middle-earth.</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default LuthienEnd;