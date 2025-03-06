import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContinueLastStory } from '../components/ProgressSystem';
import useGameStore from '../store/gameStore';
import BackgroundMusic from '../components/BackgroundMusic';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();
  const selectCharacter = useGameStore((state) => state.selectCharacter);

  const handleContinue = (character) => {
    selectCharacter(character);
    navigate('/game');
  };

  return (
    <div className="start-container">
      <BackgroundMusic src="/assets/music/The Breaking of the Fellowship (feat. In Dreams).mp3" />
      <h1 className="title">Tales of the First Age</h1>
      <p className="subtitle">A journey through the lost legends of Beleriand</p>
      <div className="button-container">
        <button onClick={() => navigate('/character-selection')}>
          Enter Middle-earth
        </button>
        <button onClick={() => alert("Gameplay info coming soon!")}>
          How to Play
        </button>
        <ContinueLastStory onContinue={handleContinue} />
      </div>
    </div>
  );
};

export default StartPage;