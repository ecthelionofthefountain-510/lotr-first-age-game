import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import CharacterSelection from './pages/CharacterSelection';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/character-selection" element={<CharacterSelection />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;