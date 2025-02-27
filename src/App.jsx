// App.jsx
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import CharacterSelection from './pages/CharacterSelection';
import GamePage from './pages/GamePage';
import BattleFingolfin from './pages/BattleFingolfin';
import BattleAzaghal from './pages/BattleAzaghal';
import BattleHurin from './pages/BattleHurin';
import BattleLuthien from './pages/BattleLuthien';
import FingolfinEnd from './pages/FingolfinEnd';
import AzaghalEnd from './pages/AzaghalEnd';
import HurinEnd from './pages/HurinEnd';
import LuthienEnd from './pages/LuthienEnd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/character-selection" element={<CharacterSelection />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/battle-fingolfin" element={<BattleFingolfin />} />
      <Route path="/battle-azaghal" element={<BattleAzaghal />} />
      <Route path="/battle-hurin" element={<BattleHurin />} />
      <Route path="/battle-luthien" element={<BattleLuthien />} />
      <Route path="/end-fingolfin" element={<FingolfinEnd />} />
      <Route path="/end-azaghal" element={<AzaghalEnd />} />
      <Route path="/end-hurin" element={<HurinEnd />} />
      <Route path="/end-luthien" element={<LuthienEnd />} />
    </Routes>
  );
}

export default App;