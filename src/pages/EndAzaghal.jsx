import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EndAzaghal.css';

const EndAzaghal = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Azaghal's Last Stand</h1>
      <p>Azaghal, Lord of Belegost, stands against Glaurung, the Father of Dragons. 
         With a final effort, he drives his dagger deep into the beast's belly.</p>
      <p>The dragon shrieks in agony, but in its death throes, it crushes Azaghal beneath its massive form.</p>
      <p>The dwarves, witnessing their lord’s sacrifice, rally and drive Glaurung's forces back, but their victory is bittersweet.</p>
      <button onClick={() => navigate("/")}>Return to Main Menu</button>
    </div>
  );
};

export default EndAzaghal;