import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import CharacterSelection from './pages/CharacterSelection';
import GamePage from './pages/GamePage';
import BattleFingolfin from './pages/BattleFingolfin';
import BattleAzaghal from './pages/BattleAzaghal';
import BattleHurin from './pages/BattleHurin';
import EndFingolfin from './pages/EndFingolfin';
import EndAzaghal from './pages/EndAzaghal';
import EndHurin from './pages/EndHurin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/character-selection" element={<CharacterSelection />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/battle-fingolfin" element={<BattleFingolfin />} />
      <Route path="/battle-azaghal" element={<BattleAzaghal />} />
      <Route path="/battle-hurin" element={<BattleHurin />} />
      <Route path="/end-fingolfin" element={<EndFingolfin />} />
      <Route path="/end-azaghal" element={<EndAzaghal />} />
      <Route path="/end-hurin" element={<EndHurin />} />
    </Routes>
  );
}

export default App;