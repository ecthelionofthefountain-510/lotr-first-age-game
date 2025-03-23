import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContinueLastStory } from '../components/ProgressSystem';
import useGameStore from '../store/gameStore';
import BackgroundMusic from '../components/BackgroundMusic';
import './StartPage.css';


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

      {showHowToPlay && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 999
            }}
            onClick={() => setShowHowToPlay(false)}
          />

          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#1e1e1e',
              color: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #d4af37',
              zIndex: 1000,
              width: '90%',
              maxWidth: '600px',
              boxShadow: '0 0 20px rgba(0,0,0,0.4)',
              fontFamily: 'Uncial Antiqua, serif',
              textAlign: 'left'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              How to Play
            </h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>📜 Experience their unique story through illustrated choices.</li>
              <li>🧠 Make decisions that influence how the tale unfolds.</li>
              <li>⚔️ Fight in key battles using a simple turn-based system.</li>
              <li>🗺️ Track each character's journey on an interactive map.</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              Every playthrough offers a new path, shaped by your choices.<br />
              Will you follow the tale or forge a new one?
            </p>
            <button onClick={() => setShowHowToPlay(false)} style={{ marginTop: '1.5rem', marginLeft: '500px'}}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default StartPage;