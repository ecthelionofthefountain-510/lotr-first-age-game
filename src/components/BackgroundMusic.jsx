import React, { useState, useRef, useEffect } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = ({ src, autoPlay = true }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Some browsers require user interaction before playing
        // This is a promise that may be rejected
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Add volume control
  const handleVolumeChange = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  return (
    <div className="music-player">
      <audio 
        ref={audioRef} 
        src={src} 
        loop 
        preload="auto"
        volume="0.5"
      />
      <button 
        onClick={togglePlay} 
        className="music-toggle"
        title={isPlaying ? "Pause Music" : "Play Music"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
      {isPlaying && (
        <div className="volume-control">
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            defaultValue="0.5"
            onChange={handleVolumeChange}
            className="volume-slider" 
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;