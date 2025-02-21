import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FingolfinEnd.css';

const FingolfinEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Fingolfin's Last Stand</h1>
      <img src="/assets/story-scenes/fingolfin-defeat.png" alt="Thorondor carrying Fingolfin's body" className="end-image" />
      <p>Fingolfin lies broken before the gates of Angband. Morgoth, limping from his wounds, crushes the Elf-lord beneath his great foot.</p>
      <p>Before Morgoth can defile his body, Thorondor, the mighty eagle, swoops down and carries him away to Gondolin.</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default FingolfinEnd;