import React, { useState, useEffect } from 'react';
import useGameStore from '../store/gameStore';
import storyData from '../data/story';
import './GamePage.css';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const { 
    currentCharacter, 
    characterProgress, 
    saveProgress, 
    markStoryComplete 
  } = useGameStore();
  
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([]);
  const [choices, setChoices] = useState([]);
  const navigate = useNavigate();
  
  if (!currentCharacter || !characterProgress[currentCharacter]) {
    return <p className="error-message">No character selected. Go back and choose one!</p>;
  }

  const { location, progress } = characterProgress[currentCharacter];
  const chapters = storyData[currentCharacter] || [];
  const chapter = chapters[progress] || { text: "The story continues...", image: "", choices: [] };

  useEffect(() => {
    // Återställ val när karaktären ändras
    setChoices(characterProgress[currentCharacter]?.choices || []);
  }, [currentCharacter]);

  useEffect(() => {
    let index = 0;
    let text = chapter.text;
    let updatedText = "";

    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      updatedText += text[index];
      setDisplayedText(updatedText); 
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  const handleNext = (nextIndex, choiceText = null) => {
    // Spara nuvarande steg och val i historiken
    const currentStep = {
      location,
      progress,
      choice: choiceText
    };
    setHistory(prev => [...prev, currentStep]);
    
    // Uppdatera valhistoriken om ett val gjordes
    if (choiceText) {
      const newChoices = [...choices, { text: choiceText, location }];
      setChoices(newChoices);
    }

    if (typeof nextIndex === "string") {
      if (nextIndex.startsWith("battle-")) {
        navigate(`/${nextIndex}`);
      } else if (nextIndex.startsWith("end-")) {
        // Markera berättelsen som avslutad innan navigering till slutet
        markStoryComplete(currentCharacter);
        navigate(`/${nextIndex}`);
      }
    } else if (nextIndex !== undefined) {
      const nextChapter = chapters[nextIndex];
      // Kontrollera om detta är sista kapitlet
      const isLastChapter = nextIndex === chapters.length - 1;
      
      saveProgress(
        currentCharacter, 
        nextChapter.location, 
        nextIndex,
        choices
      );

      // Om det är sista kapitlet och det inte finns fler val
      if (isLastChapter && (!nextChapter.choices || nextChapter.choices.length === 0)) {
        markStoryComplete(currentCharacter);
      }
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      
      // Om det tidigare steget innehöll ett val, ta bort det från valhistoriken
      if (prevStep.choice) {
        setChoices(prev => prev.slice(0, -1));
      }
      
      saveProgress(
        currentCharacter, 
        prevStep.location, 
        prevStep.progress,
        choices.slice(0, -1)
      );
    }
  };

  const handleReturnToStart = () => {
    navigate('/character-selection');
  };

  return (
    <div className="game-container">
      <div className="story-box">
        {chapter.image && <img src={chapter.image} alt={location} className="story-image fade-in" />}
        <div className="story-content">
          <div className="story-header">
            <h1>{currentCharacter}'s Story</h1>
            <div className="navigation-buttons">
              {history.length > 0 && (
                <button 
                  className="back-button" 
                  onClick={handleBack}
                  disabled={isTyping}
                >
                  ← Back
                </button>
              )}
              <button 
                className="return-button" 
                onClick={handleReturnToStart}
              >
                Return to Selection
              </button>
            </div>
          </div>
          <h2 className="location-name">{location}</h2>
          <p className="story-text">{displayedText}</p>
          <div className="choice-buttons">
            {!isTyping && (
              chapter.choices?.length > 0 ? (
                chapter.choices.map((choice, index) => (
                  <button 
                    key={index} 
                    className="next-button" 
                    onClick={() => handleNext(choice.next, choice.text)}
                  >
                    {choice.text}
                  </button>
                ))
              ) : (
                <button 
                  className="next-button" 
                  onClick={() => handleNext(progress + 1)}
                >
                  Continue →
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;