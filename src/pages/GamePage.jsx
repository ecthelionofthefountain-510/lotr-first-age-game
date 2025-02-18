import React, { useState, useEffect } from 'react';
import useGameStore from '../store/gameStore';
import storyData from '../data/story';
import './GamePage.css';

const GamePage = () => {
  const { currentCharacter, characterProgress, saveProgress } = useGameStore();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Ny state för att hantera text-animation

  if (!currentCharacter || !characterProgress[currentCharacter]) {
    return <p className="error-message">No character selected. Go back and choose one!</p>;
  }

  const { location, progress } = characterProgress[currentCharacter];
  const chapters = storyData[currentCharacter] || [];
  const chapter = chapters[progress] || { text: "The story continues...", image: "", choices: [] };

  useEffect(() => {
    let index = 0;
    let text = chapter.text; // Säkerställ att vi hämtar rätt text direkt
    let updatedText = "";

    setDisplayedText(""); // Rensa texten innan vi börjar skriva ut
    setIsTyping(true);

    const interval = setInterval(() => {
      updatedText += text[index]; // Lägg till en bokstav i taget
      setDisplayedText(updatedText); 
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false); // Stoppa animationen när texten är klar
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  const handleNext = (nextIndex) => {
    if (!isTyping && nextIndex !== undefined) { // Förhindrar att användaren trycker medan texten skrivs
      saveProgress(currentCharacter, chapters[nextIndex].location, nextIndex);
    }
  };

  return (
    <div className="game-container">
      <div className="story-box">
        {chapter.image && <img src={chapter.image} alt={location} className="story-image fade-in" />}
        <div className="story-content">
          <h1>{currentCharacter}'s Story</h1>
          <h2 className="location-name">{location}</h2>
          <p className="story-text">{displayedText}</p>
          {chapter.choices.length > 0 ? (
            chapter.choices.map((choice, index) => (
              <button key={index} className="next-button" onClick={() => handleNext(choice.next)} disabled={isTyping}>
                {choice.text}
              </button>
            ))
          ) : (
            <button className="next-button" onClick={() => handleNext(progress + 1)} disabled={isTyping}>
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;