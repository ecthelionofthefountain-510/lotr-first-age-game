import React from 'react';
import useGameStore from '../store/gameStore';

export const CharacterProgressIndicator = ({ character }) => {
  const progress = useGameStore((state) => state.characterProgress[character]);
  
  if (!progress) {
    return (
      <div className="mt-2 text-gray-400">
        Ny berättelse
      </div>
    );
  }

  if (progress.completed) {
    return (
      <div className="mt-2 text-green-400">
        Avslutad
      </div>
    );
  }

  return (
    <div className="mt-2 text-yellow-400">
      Fortsätt från: {progress.location}
    </div>
  );
};

export const ContinueLastStory = ({ onContinue }) => {
  const characterProgress = useGameStore((state) => state.characterProgress);
  
  const getLastPlayed = () => {
    let lastPlayed = null;
    let latestTime = 0;

    Object.entries(characterProgress).forEach(([character, data]) => {
      if (!data.completed) {
        const playedTime = new Date(data.lastPlayed || 0).getTime();
        if (playedTime > latestTime) {
          latestTime = playedTime;
          lastPlayed = character;
        }
      }
    });

    return lastPlayed;
  };

  const lastCharacter = getLastPlayed();

  if (!lastCharacter) return null;

  return (
    <button 
      onClick={() => onContinue(lastCharacter)}
      className="next-button mt-4"
    >
      Continue {lastCharacter}s chapter
    </button>
  );
};