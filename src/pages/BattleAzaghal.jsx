import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './BattlePage.css';

const BattleAzaghal = () => {
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
          const playerDamage = Math.floor(Math.random() * 10) + 5; // Azaghal skadar mellan 5-15
          const enemyDamage = Math.floor(Math.random() * 20) + 10; // Glaurung är starkare

          setEnemyHP((prev) => Math.max(1, prev - playerDamage)); // Glaurung kan inte dö
          setBattleLog((prev) => [...prev, `${currentCharacter} strikes Glaurung for ${playerDamage} damage!`]);

          setTimeout(() => {
            setPlayerHP((prev) => Math.max(0, prev - enemyDamage));
            setBattleLog((prev) => [...prev, `Glaurung burns ${currentCharacter} for ${enemyDamage} damage!`]);
          }, 1000);
        }

        if (playerHP <= 0) {
          clearInterval(battleInterval);
          setTimeout(() => navigate("/end-azaghal"), 3000); // Navigera till slutscenen
        }
      }, 2000);

      return () => clearInterval(battleInterval);
    }
  }, [playerHP, enemyHP, isBattleActive, navigate, currentCharacter]);

  return (
    <div className="battle-container">
      <h1>Azaghal vs Glaurung</h1>
      <div className="health-bars">
        <div className="player-health">
          <p>{currentCharacter} HP: {playerHP}</p>
          <div className="health-bar"><div style={{ width: `${playerHP}%` }} className="hp"></div></div>
        </div>
        <div className="enemy-health">
          <p>Glaurung HP: {enemyHP}</p>
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

export default BattleAzaghal;