import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FingolfinEnd.css';

const FingolfinEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Fingolfin's Last Stand</h1>
      <p>Fingolfin lies broken before the gates of Angband. Morgoth, limping from his wounds, crushes the Elf-lord beneath his great foot.</p>
      <p>His body is taken by Thorondor, the mighty eagle, and carried away...</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default FingolfinEnd;