import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './BattlePage.css';

const BattlePage = () => {
  const { currentCharacter } = useGameStore();
  const navigate = useNavigate();

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  useEffect(() => {
    if (enemyHP <= 0) {
      setBattleLog((prev) => [...prev, "You have wounded Morgoth, but the battle is lost..."]);
      setTimeout(() => navigate('/fingolfin-end'), 3000); // Skickas till slutet
    } else if (playerHP <= 0) {
      setBattleLog((prev) => [...prev, "You have fallen before Morgoth..."]);
      setTimeout(() => navigate('/fingolfin-end'), 3000); // Skickas till slutet
    }
  }, [playerHP, enemyHP, navigate]);

  const playerAttack = () => {
    if (!isPlayerTurn) return;
    const damage = Math.floor(Math.random() * 10) + 5; // Fingolfin kan bara göra max 15 skada
    setEnemyHP((prev) => Math.max(1, prev - damage)); // Morgoth kan aldrig dö
    setBattleLog((prev) => [...prev, `${currentCharacter} attacks for ${damage} damage!`]);
    setIsPlayerTurn(false);
    setTimeout(enemyAttack, 1000);
  };

  const enemyAttack = () => {
    const damage = Math.floor(Math.random() * 20) + 10; // Morgoth gör mer skada
    setPlayerHP((prev) => Math.max(0, prev - damage));
    setBattleLog((prev) => [...prev, `Morgoth strikes back for ${damage} damage!`]);
    setIsPlayerTurn(true);
  };

  return (
    <div className="battle-container">
      <h1>Fingolfin vs Morgoth</h1>
      <div className="health-bars">
        <div className="player-health">
          <p>{currentCharacter} HP: {playerHP}</p>
          <div className="health-bar"><div style={{ width: `${playerHP}%` }} className="hp"></div></div>
        </div>
        <div className="enemy-health">
          <p>Morgoth HP: {enemyHP}</p>
          <div className="health-bar"><div style={{ width: `${enemyHP}%` }} className="hp enemy"></div></div>
        </div>
      </div>
      <button className="attack-button" onClick={playerAttack} disabled={!isPlayerTurn}>
        Attack!
      </button>
      <div className="battle-log">
        {battleLog.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default BattlePage;