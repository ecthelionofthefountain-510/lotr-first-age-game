import React, { useState, useEffect, useRef } from 'react';
import useGameStore from '../store/gameStore';
import storyData from '../data/story';
import './GamePage.css';
import { useNavigate } from 'react-router-dom';
import StoryAudio from '../components/StoryAudio';
import '../components/StoryAudio.css';

const AUDIO_SCENES = {
  "Tirion Square": "/assets/music/The Oath of Fëanor.mp3"
};

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
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [showAudioControls, setShowAudioControls] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null); // Ref för typningsintervallet
  const navigate = useNavigate();
  
  if (!currentCharacter || !characterProgress[currentCharacter]) {
    return <p className="error-message">No character selected. Go back and choose one!</p>;
  }

  const { location, progress } = characterProgress[currentCharacter];
  const chapters = storyData[currentCharacter] || [];
  const chapter = chapters[progress] || { text: "The story continues...", image: "", choices: [] };

  const hasAudio = AUDIO_SCENES[location] !== undefined;

  useEffect(() => {
    setChoices(characterProgress[currentCharacter]?.choices || []);
  }, [currentCharacter]);

  useEffect(() => {
    if (hasAudio) {
      console.log("Location changed to scene with audio:", location);
      setIsAudioPlaying(true);
      setShowAudioControls(false);
    }
  }, [location, hasAudio]);

  // Typningsanimation med lagrad interval-ID i en ref
  useEffect(() => {
    let index = 0;
    const text = chapter.text;
    let updatedText = "";

    setDisplayedText("");
    setIsTyping(true);

    intervalRef.current = setInterval(() => {
      updatedText += text[index];
      setDisplayedText(updatedText); 
      index++;

      if (index >= text.length) {
        clearInterval(intervalRef.current);
        setIsTyping(false);
        if (hasAudio) {
          setShowAudioControls(true);
        }
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, [progress, chapter.text, hasAudio]);

  // Funktion som hanterar att "hoppa över" typningen om texten inte är färdig
  const handleSkipOrNext = (nextIndex, choiceText = null) => {
    if (isTyping) {
      clearInterval(intervalRef.current);
      setDisplayedText(chapter.text);
      setIsTyping(false);
      if (hasAudio) {
        setShowAudioControls(true);
      }
      // Om du vill kräva ett andra klick för att faktiskt gå vidare, kan du returnera här
      // return;
    } else {
      handleNext(nextIndex, choiceText);
    }
  };

  const handleNext = (nextIndex, choiceText = null) => {
    const currentStep = {
      location,
      progress,
      choice: choiceText
    };
    setHistory(prev => [...prev, currentStep]);
    
    if (choiceText) {
      const newChoices = [...choices, { text: choiceText, location }];
      setChoices(newChoices);
    }

    if (typeof nextIndex === "string") {
      if (nextIndex.startsWith("battle-")) {
        navigate(`/${nextIndex}`);
      } else if (nextIndex.startsWith("end-")) {
        markStoryComplete(currentCharacter);
        navigate(`/${nextIndex}`);
      }
    } else if (nextIndex !== undefined) {
      const nextChapter = chapters[nextIndex];
      const isLastChapter = nextIndex === chapters.length - 1;
      
      saveProgress(
        currentCharacter, 
        nextChapter.location, 
        nextIndex,
        choices
      );

      if (isLastChapter && (!nextChapter.choices || nextChapter.choices.length === 0)) {
        markStoryComplete(currentCharacter);
      }
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevStep = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      
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

  const handleAudioPlayStateChange = (isPlaying) => {
    setIsAudioPlaying(isPlaying);
  };

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
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
          
          {hasAudio && (
            <StoryAudio 
              audioPath={AUDIO_SCENES[location]} 
              autoPlay={true}
              visibleControls={showAudioControls}
              onPlayStateChange={handleAudioPlayStateChange}
            />
          )}
          
          <div className="choice-buttons">
            {chapter.choices?.length > 0 ? (
              chapter.choices.map((choice, index) => (
                <button 
                  key={index} 
                  className="next-button" 
                  onClick={() => handleSkipOrNext(choice.next, choice.text)}
                >
                  {choice.text}
                </button>
              ))
            ) : (
              <button 
                className="next-button" 
                onClick={() => handleSkipOrNext(progress + 1)}
              >
                Continue →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;