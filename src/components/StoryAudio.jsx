import React, { useEffect, useRef, useState } from 'react';
import './StoryAudio.css';

const StoryAudio = ({ 
  audioPath, 
  autoPlay = true,
  visibleControls = true,
  onPlayStateChange = null 
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const hasInitializedRef = useRef(false);

  
  // This effect handles the initial setup when component mounts or audioPath changes
  useEffect(() => {
    if (audioRef.current && audioPath) {
      // Reset playing state when path changes
      hasInitializedRef.current = false;
      
      // Set up the audio element
      const audioElement = audioRef.current;
      audioElement.volume = 0.7;
      audioElement.load(); // Explicitly load the audio
      
      // Set up event listeners for the audio element
      const handleCanPlay = () => {
        console.log("Audio can play now:", audioPath);
        if (autoPlay && !hasInitializedRef.current) {
          hasInitializedRef.current = true;
          try {
            const playPromise = audioElement.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log("Autoplay successful");
                  setIsPlaying(true);
                  if (onPlayStateChange) onPlayStateChange(true);
                })
                .catch(error => {
                  console.error("Autoplay prevented:", error);
                  setIsPlaying(false);
                  if (onPlayStateChange) onPlayStateChange(false);
                });
            }
          } catch (error) {
            console.error("Play attempt error:", error);
          }
        }
      };
      
      // Add event listeners
      audioElement.addEventListener('canplaythrough', handleCanPlay);
      
      return () => {
        // Clean up event listeners
        audioElement.removeEventListener('canplaythrough', handleCanPlay);
        audioElement.pause();
      };
    }
  }, [audioPath, autoPlay, onPlayStateChange]);
  
  // This effect handles changes to the isPlaying state
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    
    if (isPlaying) {
      try {
        const playPromise = audioElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Play error from state change:", error);
            setIsPlaying(false);
          });
        }
      } catch (error) {
        console.error("Play attempt error from state change:", error);
        setIsPlaying(false);
      }
    } else {
      audioElement.pause();
    }
    
    if (onPlayStateChange) {
      onPlayStateChange(isPlaying);
    }
  }, [isPlaying, onPlayStateChange]);

  const togglePlay = () => {
    console.log("Toggle play clicked, current state:", isPlaying);
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div className={`story-audio ${!visibleControls ? 'hidden-audio' : ''}`}>
      <audio 
        ref={audioRef} 
        src={audioPath} 
        preload="auto"
      />
      
      {visibleControls && (
        <button 
          onClick={togglePlay}
          className="story-audio-toggle"
          title={isPlaying ? "Pausa berättarröst" : "Spela berättarröst"}
        >
          <span className="audio-icon">{isPlaying ? "🔊" : "🔇"}</span>
          <span className="audio-text">
            {isPlaying ? "Pausa berättarröst" : "Spela berättarröst"}
          </span>
        </button>
      )}
    </div>
  );
};

export default StoryAudio;