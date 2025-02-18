import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './BattlePage.css';

const BattlePage = () => {
  const { currentCharacter } = useGameStore();
  const navigate = useNavigate();

  // Fallback så att vi alltid har ett giltigt karaktärsnamn
  const characterName = currentCharacter || "Fingolfin";

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isBattleActive, setIsBattleActive] = useState(true);

  useEffect(() => {
    if (isBattleActive) {
      const battleInterval = setInterval(() => {
        if (playerHP > 0) {
          const playerDamage = Math.floor(Math.random() * 10) + 5; // Fingolfin skadar mellan 5-15
          const enemyDamage = Math.floor(Math.random() * 20) + 10; // Morgoth skadar mer

          setEnemyHP((prev) => Math.max(1, prev - playerDamage)); // Morgoth kan inte dö
          setBattleLog((prev) => [...prev, `${characterName} strikes Morgoth for ${playerDamage} damage!`]);

          setTimeout(() => {
            setPlayerHP((prev) => Math.max(0, prev - enemyDamage));
            setBattleLog((prev) => [...prev, `Morgoth crushes ${characterName} for ${enemyDamage} damage!`]);
          }, 1000);
        }

        if (playerHP <= 0) {
          clearInterval(battleInterval);
          setTimeout(() => navigate('/fingolfin-end'), 3000);
        }
      }, 2000); // Varje attack sker varannan sekund

      return () => clearInterval(battleInterval);
    }
  }, [playerHP, enemyHP, isBattleActive, navigate, characterName]);

  return (
    <div className="battle-container">
      <h1>{characterName} vs Morgoth</h1>
      <div className="health-bars">
        <div className="player-health">
          <p>{characterName} HP: {playerHP}</p>
          <div className="health-bar"><div style={{ width: `${playerHP}%` }} className="hp"></div></div>
        </div>
        <div className="enemy-health">
          <p>Morgoth HP: {enemyHP}</p>
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

export default BattlePage;