import React from 'react';

const CharacterProgress = ({ progress }) => {
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

export default CharacterProgress;