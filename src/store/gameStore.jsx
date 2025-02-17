import { create } from 'zustand';

const useGameStore = create((set) => ({
  currentCharacter: null,
  characterProgress: {},

  selectCharacter: (char) => set((state) => ({
    currentCharacter: char,
    characterProgress: { 
      ...state.characterProgress, 
      [char]: state.characterProgress[char] || { location: "Start", progress: 0 }
    }
  })),

  saveProgress: (char, location, progress) => set((state) => ({
    characterProgress: { 
      ...state.characterProgress, 
      [char]: { location, progress }
    }
  }))
}));

export default useGameStore;