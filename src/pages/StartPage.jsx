import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContinueLastStory } from '../components/ProgressSystem';
import useGameStore from '../store/gameStore';
import BackgroundMusic from '../components/BackgroundMusic';
import './StartPage.css';
import HowToPlayDialog from '../components/HowToPlayDialog';


const StartPage = () => {
  const navigate = useNavigate();
  const selectCharacter = useGameStore((state) => state.selectCharacter);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const handleContinue = (character) => {
    selectCharacter(character);
    navigate('/game');
  };

  return (
    <div className="start-container">
      {/* <BackgroundMusic src="/assets/music/The Breaking of the Fellowship (feat. In Dreams).mp3" /> // add when done */} 

      <h1 className="title">Tales of the First Age</h1>
      <p className="subtitle">A journey through the lost legends of Beleriand</p>

      <div className="button-container">
        <button onClick={() => navigate('/character-selection')}>Enter Middle-earth</button>
        <ContinueLastStory onContinue={handleContinue} /><br />
        <button onClick={() => navigate('/journeys')}>View Character Journeys</button>
        
        <button onClick={() => navigate('/quiz')}>Take the Quiz</button> <br />
        <button onClick={() => setShowHowToPlay(true)}>How to Play</button>
        
        
      </div>
      <HowToPlayDialog onClose={() => setShowHowToPlay(false)} open={showHowToPlay} />

    </div>
  );
};

export default StartPage;