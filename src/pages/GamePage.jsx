// GamePage.jsx with consistent back button for all character pages
import React, { useState, useEffect, useRef } from 'react';
import useGameStore from '../store/gameStore';
import storyData from '../data/story';
import './GamePage.css';
import { useNavigate } from 'react-router-dom';
import StoryAudio from '../components/StoryAudio';
import '../components/StoryAudio.css';

// Fixed mapping - ensure exact match for Fëanor's "Tirion Square" location
const AUDIO_SCENES = {
  "Tirion Square": "/assets/music/The Oath of Feanor.mp3"
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
  const [isAudioPlaying, setIsAudioPlaying] = useState(true); // Set to true to start unmuted
  const [showAudioControls, setShowAudioControls] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  
  if (!currentCharacter || !characterProgress[currentCharacter]) {
    return <p className="error-message">No character selected. Go back and choose one!</p>;
  }

  const { location, progress } = characterProgress[currentCharacter];
  const chapters = storyData[currentCharacter] || [];
  const chapter = chapters[progress] || { text: "The story continues...", image: "", choices: [] };

  // Check if we're on the Oath of Fëanor scene
  const isOathScene = location === "Tirion Square";

  // Improved audio detection: Check if the current location has an associated audio file
  const hasAudio = AUDIO_SCENES[location] !== undefined;

  // Initialize the audio path based on the current location
  useEffect(() => {
    if (hasAudio) {
      console.log("Location with audio detected:", location);
      console.log("Audio path:", AUDIO_SCENES[location]);
      setCurrentAudio(AUDIO_SCENES[location]);
      setIsAudioPlaying(true);
      
      // For Tirion Square, show audio controls immediately
      if (location === "Tirion Square") {
        setShowAudioControls(true);
      }
    } else {
      setCurrentAudio(null);
      setShowAudioControls(false);
    }
  }, [location, hasAudio]);

  useEffect(() => {
    setChoices(characterProgress[currentCharacter]?.choices || []);
  }, [currentCharacter]);

  // Typing animation - but skip for Tirion Square
  useEffect(() => {
    // For Tirion Square location, display text immediately and play audio
    if (location === "Tirion Square") {
      setDisplayedText(chapter.text);
      setIsTyping(false);
      if (hasAudio) {
        setShowAudioControls(true);
      }
      return;
    }
    
    // Normal typing animation for other locations
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
        // Show audio controls after text is fully displayed
        if (hasAudio) {
          setShowAudioControls(true);
        }
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, [progress, chapter.text, hasAudio, location]);

  // Skip typing or proceed to next
  const handleSkipOrNext = (nextIndex, choiceText = null) => {
    if (isTyping) {
      clearInterval(intervalRef.current);
      setDisplayedText(chapter.text);
      setIsTyping(false);
      if (hasAudio) {
        setShowAudioControls(true);
      }
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
    // If we have history, go back to the previous step
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
    } else {
      // If no history, just go back to character selection
      navigate('/character-selection');
    }
  };

  const handleReturnToStart = () => {
    navigate('/character-selection');
  };

  const handleAudioPlayStateChange = (isPlaying) => {
    setIsAudioPlaying(isPlaying);
    console.log("Audio play state changed:", isPlaying);
  };

  useEffect(() => {
    if (location === "Tirion Square" && chapter.text) {
      console.log("FAILSAFE: Setting text for Tirion Square");
      setTimeout(() => {
        setDisplayedText(chapter.text);
      }, 100);
    }
  }, [location, chapter.text]);

  return (
    <div className={`game-container ${isOathScene ? 'oath-scene-container' : ''}`}>
      <div className={`story-box ${isOathScene ? 'oath-scene' : ''}`}>
        {/* Add oath scene special effects if we're on that scene */}
        {isOathScene && (
          <>
            <div className="oath-darkening-overlay"></div>
            <div className="oath-torchlight"></div>
            <div className="oath-silmaril-glow"></div>
            <div className="oath-raised-swords"></div>
            <div className="oath-morgoth-shadow"></div>
            <div className="oath-smoke-effect"></div>
            <div className="oath-lightning"></div>
          </>
        )}
      
        {chapter.image && <img src={chapter.image} alt={location} className="story-image fade-in" />}
        <div className="story-content">
          <div className="story-header">
            <h1>{currentCharacter}'s Story</h1>
            <div className="navigation-buttons">
              {/* Always show back button - changed from conditional rendering */}
              <button 
                className="back-button" 
                onClick={handleBack}
                disabled={isTyping}
              >
                ← Back
              </button>
              <button 
                className="return-button" 
                onClick={handleReturnToStart}
              >
                Return to Selection
              </button>
            </div>
          </div>
          <h2 className="location-name">{location}</h2>
          <p className={`story-text ${isOathScene ? 'oath-text' : ''}`}>
            {displayedText || (isOathScene ? chapter.text : "")}
          </p>
          
          {/* Make sure StoryAudio component is rendered only when needed */}
          {currentAudio && (
            <StoryAudio 
              audioPath={currentAudio} 
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