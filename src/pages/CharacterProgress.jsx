import React from 'react';

const CharacterProgress = ({ progress }) => {
  if (!progress) {
    return (
      <div className="mt-2 text-gray-400">
        New story
      </div>
    );
  }

  if (progress.completed) {
    return (
      <div className="mt-2 text-green-400">
        Finished
      </div>
    );
  }

  return (
    <div className="mt-2 text-yellow-400">
      Continue from: {progress.location}
    </div>
  );
};

export default CharacterProgress;