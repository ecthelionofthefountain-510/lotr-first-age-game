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
  { name: "Beren", image: "/assets/characters/Beren.png" },
  { name: "Eonwë", image: "/assets/characters/Eonwe.png" },
  { name: "Ecthelion", image: "/assets/characters/Ecthelion.png" },
  { name: "Túrin", image: "/assets/characters/Turin-Turambar.png" },
  { name: "Tuor", image: "/assets/characters/Tuor.png" },
  { name: "Thingol", image: "/assets/characters/Thingol.png" },
  { name: "Melian", image: "/assets/characters/Melian.jpg" },
  
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
      <h1 className="character-title">Choose your character</h1>
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
                title="Restart character progress"
              >
                Reset
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="reset-confirm-modal">
          <div className="reset-confirm-content">
            <h2>Reset story</h2>
            <p>Are you sure you wanna reset all progeress for {selectedCharacter}?</p>
            <p>There is no going back once confirmed.</p>
            <div className="reset-confirm-buttons">
              <button onClick={cancelReset} className="cancel-button">Abort</button>
              <button onClick={confirmReset} className="confirm-button">Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterSelection;