import React, { useState, useRef, useEffect } from 'react';
import '../components/BattleMusic.css'; // Reuse the same CSS

const BattleMusic = ({ 
  src, 
  autoPlay = true, 
  battleState = null, // Can be used to change music based on battle state
  volumeLevel = 0.6 // Higher default volume for battle scenes
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Start playing as soon as component mounts
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
    
    // Clean up function - pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying, volumeLevel]);
  
  // If battle state changes (e.g., player is winning/losing), we could 
  // potentially change the music track dynamically
  useEffect(() => {
    if (battleState && audioRef.current) {
      // Future implementation for dynamic music changes
      // e.g., if battleState === 'player-winning' switch to triumphant music
    }
  }, [battleState]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  return (
    <div className="music-player battle-music">
      <audio 
        ref={audioRef} 
        src={src} 
        loop 
        preload="auto"
      />
      <button 
        onClick={togglePlay} 
        onMouseEnter={() => setShowVolume(true)}
        className="music-toggle"
        title={isPlaying ? "Pause Battle Music" : "Play Battle Music"}
        aria-label={isPlaying ? "Pause Battle Music" : "Play Battle Music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
      {isPlaying && showVolume && (
        <div 
          className="volume-control"
          onMouseLeave={() => setShowVolume(false)}
        >
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            defaultValue={volumeLevel}
            onChange={handleVolumeChange}
            className="volume-slider" 
          />
        </div>
      )}
    </div>
  );
};

export default BattleMusic;

