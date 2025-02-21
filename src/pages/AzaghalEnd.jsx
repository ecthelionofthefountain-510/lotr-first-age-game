import React from 'react';
import { useNavigate } from 'react-router-dom';


const AzaghalEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Azaghal's Last Stand</h1>
      <img src="/assets/story-scenes/azaghal-defeat.png" alt="Azaghal carried by dwarves" className="end-image" />
      <p>Azaghal is mortally wounded but, with his last breath, he plunges his dagger into Glaurung’s belly. The dragon flees, wounded for the first time.</p>
      <p>His warriors carry him from the battlefield, honoring his sacrifice.</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default AzaghalEnd;