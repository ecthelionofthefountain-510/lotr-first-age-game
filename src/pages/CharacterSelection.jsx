import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import { CharacterProgressIndicator } from '../components/ProgressSystem';
import './CharacterSelection.css';

const characters = [
  { name: "Fëanor", image: "/assets/characters/Feanor.jpg" },  // Add this line
  { name: "Fingolfin", image: "/assets/characters/Fingolfin2.png" },
  { name: "Azaghal", image: "/assets/characters/Azaghal.png" },
  { name: "Húrin", image: "/assets/characters/Hurin3.png" },
  { name: "Lúthien", image: "/assets/characters/Luthien.png" },
];

const CharacterSelection = () => {
  const navigate = useNavigate();
  const { selectCharacter } = useGameStore();

  const handleSelect = (charName) => {
    selectCharacter(charName);
    navigate('/game');
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;