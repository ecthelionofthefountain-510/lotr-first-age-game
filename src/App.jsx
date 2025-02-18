import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import CharacterSelection from './pages/CharacterSelection';
import GamePage from './pages/GamePage';
import BattlePage from './pages/BattlePage';
import FingolfinEnd from './pages/FingolfinEnd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/character-selection" element={<CharacterSelection />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/battle" element={<BattlePage />} />
      <Route path="/fingolfin-end" element={<FingolfinEnd />} />
    </Routes>
  );
}

export default App;