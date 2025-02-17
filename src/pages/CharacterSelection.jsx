import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './CharacterSelection.css';

const characters = [
  { name: "Beren", image: "/assets/characters/Beren.png" },
  { name: "Túrin", image: "/assets/characters/Turin-Turambar.png" },
  { name: "Tuor", image: "/assets/characters/Tuor.png" },
  { name: "Fingolfin", image: "/assets/characters/Fingolfin.png" },
  { name: "Ecthelion", image: "/assets/characters/Ecthelion.png" },
  { name: "Azaghal", image: "/assets/characters/Azaghal.png" },
  { name: "Húrin", image: "/assets/characters/Hurin.png" },
  { name: "Eönwë", image: "/assets/characters/Eonwe.png" },
  { name: "Lúthien", image: "/assets/characters/Luthien.png" },
  { name: "Thingol", image: "/assets/characters/Thingol.png" }
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
      <h1>Välj din karaktär</h1>
      <div className="character-grid">
        {characters.map((char) => (
          <div key={char.name} className="character-card" onClick={() => handleSelect(char.name)}>
            <img src={char.image} alt={char.name} className="character-image" />
            <p className="character-name">{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;