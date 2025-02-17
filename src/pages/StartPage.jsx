import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <h1 className="title">Tales of the First Age</h1>
      <p className="subtitle">A journey through the lost legends of Beleriand</p>
      <div className="button-container">
        <button onClick={() => navigate('/character-selection')}>Enter Middle-earth</button>
        <button onClick={() => alert("Gameplay info coming soon!")}>How to Play</button>
      </div>
    </div>
  );
};

export default StartPage;