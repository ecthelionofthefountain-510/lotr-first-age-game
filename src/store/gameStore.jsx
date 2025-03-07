import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useGameStore = create(
  persist(
    (set) => ({
      currentCharacter: null,
      characterProgress: {},

      selectCharacter: (char) => set((state) => ({
        currentCharacter: char,
        characterProgress: { 
          ...state.characterProgress, 
          [char]: state.characterProgress[char] || {
            location: "Start",
            progress: 0,
            choices: [],
            lastPlayed: new Date().toISOString(),
            completed: false
          }
        }
      })),

      saveProgress: (char, location, progress, choices = []) => set((state) => ({
        characterProgress: { 
          ...state.characterProgress, 
          [char]: {
            location,
            progress,
            choices,
            lastPlayed: new Date().toISOString(),
            completed: state.characterProgress[char]?.completed || false
          }
        }
      })),

      markStoryComplete: (char) => set((state) => ({
        characterProgress: {
          ...state.characterProgress,
          [char]: {
            ...state.characterProgress[char],
            completed: true,
            completedAt: new Date().toISOString()
          }
        }
      })),

      resetProgress: (char = null) => set((state) => {
        // If a specific character is provided, reset only that character
        if (char) {
          const updatedProgress = { ...state.characterProgress };
          delete updatedProgress[char];
          
          return {
            characterProgress: updatedProgress,
            // Update current character if the reset character is the current one
            currentCharacter: state.currentCharacter === char ? null : state.currentCharacter
          };
        }
        
        // Otherwise reset all progress
        return {
          characterProgress: {},
          currentCharacter: null
        };
      }),

      getLastPlayedCharacter: () => {
        const progress = useGameStore.getState().characterProgress;
        let lastPlayed = null;
        let latestTime = 0;

        Object.entries(progress).forEach(([character, data]) => {
          if (!data.completed) {
            const playedTime = new Date(data.lastPlayed).getTime();
            if (playedTime > latestTime) {
              latestTime = playedTime;
              lastPlayed = character;
            }
          }
        });

        return lastPlayed;
      }
    }),
    {
      name: 'game-storage',
      getStorage: () => localStorage
    }
  )
);

export default useGameStore;