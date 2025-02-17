import React from 'react';
import useGameStore from '../store/gameStore';
import storyData from '../data/story';
import './GamePage.css';

const GamePage = () => {
  const { currentCharacter, characterProgress, saveProgress } = useGameStore();

  if (!currentCharacter || !characterProgress[currentCharacter]) {
    return <p className="error-message">Ingen karaktär vald. Gå tillbaka och välj en!</p>;
  }

  const { location, progress } = characterProgress[currentCharacter];
  const chapters = storyData[currentCharacter] || [];
  const chapter = chapters[progress] || { text: "Berättelsen fortsätter...", image: "" };

  const handleNext = () => {
    if (progress < chapters.length - 1) {
      saveProgress(currentCharacter, chapters[progress + 1].location, progress + 1);
    } else {
      alert("Berättelsen för denna karaktär är slut!");
    }
  };

  return (
    <div className="game-container">
      <div className="story-box">
        {chapter.image && <img src={chapter.image} alt={location} className="story-image fade-in" />}
        <div className="story-content">
          <h1>{currentCharacter}s berättelse</h1>
          <h2 className="location-name">{location}</h2>
          <p className="story-text">{chapter.text}</p>
          <button className="next-button" onClick={handleNext}>Fortsätt →</button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;