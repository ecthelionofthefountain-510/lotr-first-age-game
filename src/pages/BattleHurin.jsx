import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './BattlePage.css';

const BattleHurin = () => {
  const { currentCharacter } = useGameStore();
  const navigate = useNavigate();

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isBattleActive, setIsBattleActive] = useState(true);

  useEffect(() => {
    if (isBattleActive) {
      const battleInterval = setInterval(() => {
        if (playerHP > 0) {
          const playerDamage = Math.floor(Math.random() * 15) + 5; // Húrin skadar mellan 5-20
          const enemyDamage = Math.floor(Math.random() * 25) + 10; // Orcherna är många

          setEnemyHP((prev) => Math.max(1, prev - playerDamage)); // Orc-armén kan inte dö
          setBattleLog((prev) => [...prev, `${currentCharacter} slashes through orcs for ${playerDamage} damage!`]);

          setTimeout(() => {
            setPlayerHP((prev) => Math.max(0, prev - enemyDamage));
            setBattleLog((prev) => [...prev, `Orcs swarm ${currentCharacter}, dealing ${enemyDamage} damage!`]);
          }, 1000);
        }

        if (playerHP <= 0) {
          clearInterval(battleInterval);
          setTimeout(() => navigate("/end-hurin"), 3000); // Navigera till slutscenen
        }
      }, 2000);

      return () => clearInterval(battleInterval);
    }
  }, [playerHP, enemyHP, isBattleActive, navigate, currentCharacter]);

  return (
    <div className="battle-container">
      <h1>Húrin vs The Orc Horde</h1>
      <div className="health-bars">
        <div className="player-health">
          <p>{currentCharacter} HP: {playerHP}</p>
          <div className="health-bar"><div style={{ width: `${playerHP}%` }} className="hp"></div></div>
        </div>
        <div className="enemy-health">
          <p>Orc Horde HP: {enemyHP}</p>
          <div className="health-bar"><div style={{ width: `${enemyHP}%` }} className="hp enemy"></div></div>
        </div>
      </div>
      <div className="battle-log">
        {battleLog.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default BattleHurin;