import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import { CharacterProgressIndicator } from '../components/ProgressSystem';
import './CharacterSelection.css';

const characters = [
  { name: "Fëanor", image: "/assets/characters/Feanor2.jpg" },
  { name: "Fingolfin", image: "/assets/characters/Fingolfin2.png" },
  { name: "Azaghal", image: "/assets/characters/Azaghal.png" },
  { name: "Húrin", image: "/assets/characters/Hurin3.png" },
  { name: "Lúthien", image: "/assets/characters/Luthien.png" },
];

const CharacterSelection = () => {
  const navigate = useNavigate();
  const { selectCharacter, resetProgress, characterProgress } = useGameStore();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSelect = (charName) => {
    selectCharacter(charName);
    navigate('/game');
  };

  const handleResetClick = (charName, e) => {
    e.stopPropagation(); // Prevent triggering the parent click
    setSelectedCharacter(charName);
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    if (selectedCharacter) {
      resetProgress(selectedCharacter);
      setShowResetConfirm(false);
      setSelectedCharacter(null);
    }
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="character-selection-container">
      <h1 className="character-title">Välj din karaktär</h1>
      <div className="character-grid">
        {characters.map((char) => (
          <div 
            key={char.name} 
            className="character-card" 
            onClick={() => handleSelect(char.name)}
          >
            <img 
              src={char.image} 
              alt={char.name} 
              className="character-image" 
            />
            <p className="character-name">{char.name}</p>
            <CharacterProgressIndicator character={char.name} />
            
            {characterProgress[char.name] && (
              <button 
                className="reset-button" 
                onClick={(e) => handleResetClick(char.name, e)}
                title="Börja om berättelsen"
              >
                Återställ
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="reset-confirm-modal">
          <div className="reset-confirm-content">
            <h2>Återställ berättelse</h2>
            <p>Är du säker på att du vill återställa all framsteg för {selectedCharacter}?</p>
            <p>Detta kan inte ångras.</p>
            <div className="reset-confirm-buttons">
              <button onClick={cancelReset} className="cancel-button">Avbryt</button>
              <button onClick={confirmReset} className="confirm-button">Återställ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterSelection;