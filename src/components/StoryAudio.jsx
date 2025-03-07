import React, { useEffect, useRef, useState } from 'react';

const StoryAudio = ({ 
  audioPath, 
  autoPlay = true,
  visibleControls = true,
  onPlayStateChange = null 
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const hasInitializedRef = useRef(false);
  
  // Spela ljud vid första renderingen om det inte redan har startats
  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement && autoPlay && !hasInitializedRef.current) {
      // Markera att initialisering har skett för att undvika att spela om ljudet
      hasInitializedRef.current = true;
      
      // Sätt volym och andra egenskaper
      audioElement.volume = 0.7;
      
      // Kort fördröjning för att säkerställa att ljudet laddats
      const timer = setTimeout(() => {
        console.log("Attempting to play audio:", audioPath);
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playing successfully");
              setIsPlaying(true);
              if (onPlayStateChange) {
                onPlayStateChange(true);
              }
            })
            .catch(error => {
              console.log("Autoplay prevented:", error);
              setIsPlaying(false);
              if (onPlayStateChange) {
                onPlayStateChange(false);
              }
            });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
    
    // Städa upp när komponenten avmonteras
    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, [audioPath]); // Körs endast när ljudsökvägen ändras
  
  // Håll ljudstatus synkroniserad med isPlaying
  useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement) {
      if (isPlaying) {
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Play error:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audioElement.pause();
      }
      
      // Meddela parent-komponenten om spelstatus
      if (onPlayStateChange) {
        onPlayStateChange(isPlaying);
      }
    }
  }, [isPlaying, onPlayStateChange]);

  const togglePlay = () => {
    console.log("Toggle play, current state:", isPlaying);
    setIsPlaying(!isPlaying);
  };

  // Samma ljudelement återanvänds oavsett om kontroller visas eller inte
  return (
    <div className={`story-audio ${!visibleControls ? 'hidden-audio' : ''}`}>
      <audio ref={audioRef} src={audioPath} preload="auto" />
      
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