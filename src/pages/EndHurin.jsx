import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EndHurin.css';

const EndHurin = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>The Fall of Húrin</h1>
      <p>Húrin fights until the last, slaying countless orcs. 
         With each strike, he cries, <em>'Aurë entuluva! Day shall come again!'</em></p>
      <p>Eventually, the tide overwhelms him. Bound in chains, he is dragged before Morgoth.</p>
      <p>From the heights of Thangorodrim, he is cursed to watch his family’s downfall, a prisoner of fate.</p>
      <button onClick={() => navigate("/")}>Return to Main Menu</button>
    </div>
  );
};

export default EndHurin;