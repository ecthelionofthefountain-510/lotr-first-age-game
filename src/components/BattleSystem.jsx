import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';
import './BattleSystem.css';  // Uppdaterad import

export const BattleSystem = ({
  character,
  enemyName,
  playerDamageRange,
  enemyDamageRange,
  specialMoves = [],
  playerImage,
  enemyImage,
  onBattleEnd
}) => {
  const navigate = useNavigate();
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isBattleActive, setIsBattleActive] = useState(true);
  const [specialMoveCooldowns, setSpecialMoveCooldowns] = useState(
    specialMoves.reduce((acc, move) => ({ ...acc, [move.name]: 0 }), {})
  );

  const handleSpecialMove = (move) => {
    if (specialMoveCooldowns[move.name] > 0) return;

    const damage = Math.floor(
      Math.random() * (move.damage[1] - move.damage[0]) + move.damage[0]
    );

    setEnemyHP((prev) => Math.max(1, prev - damage));
    setBattleLog((prev) => [...prev, `${character} uses ${move.name} for ${damage} damage!`]);
    
    setSpecialMoveCooldowns((prev) => ({
      ...prev,
      [move.name]: move.cooldown
    }));
  };

  useEffect(() => {
    if (isBattleActive) {
      const battleInterval = setInterval(() => {
        if (playerHP > 0) {
          // Normal attack
          const playerDamage = Math.floor(
            Math.random() * (playerDamageRange[1] - playerDamageRange[0]) + playerDamageRange[0]
          );
          const enemyDamage = Math.floor(
            Math.random() * (enemyDamageRange[1] - enemyDamageRange[0]) + enemyDamageRange[0]
          );

          setEnemyHP((prev) => Math.max(1, prev - playerDamage));
          setBattleLog((prev) => [...prev, `${character} strikes ${enemyName} for ${playerDamage} damage!`]);

          // Enemy counterattack
          setTimeout(() => {
            setPlayerHP((prev) => Math.max(0, prev - enemyDamage));
            setBattleLog((prev) => [...prev, `${enemyName} attacks ${character} for ${enemyDamage} damage!`]);
          }, 1000);

          // Update cooldowns
          setSpecialMoveCooldowns((prev) => {
            const updated = { ...prev };
            Object.keys(updated).forEach(moveName => {
              if (updated[moveName] > 0) updated[moveName]--;
            });
            return updated;
          });
        }

        if (playerHP <= 0) {
          clearInterval(battleInterval);
          setIsBattleActive(false);
          setTimeout(() => navigate(`/end-${character.toLowerCase()}`), 3000);
        }
      }, 2000);

      return () => clearInterval(battleInterval);
    }
  }, [playerHP, enemyHP, isBattleActive, navigate, character, enemyName, playerDamageRange, enemyDamageRange]);

// BattleSystem.jsx - Uppdatera battle-log delen
return (
  <div className="battle-container">
    <h1>{character} vs {enemyName}</h1>
    
    <div className="battle-scene">
      <div className="character-container player">
        <img src={playerImage} alt={character} className="character-image" />
        <div className="health-info">
          <p>{character} HP: {playerHP}</p>
          <div className="health-bar">
            <div style={{ width: `${playerHP}%` }} className="hp"></div>
          </div>
        </div>
      </div>

      <div className="vs-divider">VS</div>

      <div className="character-container enemy">
        <img src={enemyImage} alt={enemyName} className="character-image" />
        <div className="health-info">
          <p>{enemyName} HP: {enemyHP}</p>
          <div className="health-bar">
            <div style={{ width: `${enemyHP}%` }} className="hp enemy"></div>
          </div>
        </div>
      </div>
    </div>

    {specialMoves.length > 0 && (
      <div className="special-moves">
        {specialMoves.map((move) => (
          <button
            key={move.name}
            onClick={() => handleSpecialMove(move)}
            disabled={specialMoveCooldowns[move.name] > 0 || !isBattleActive}
            className="special-move-button"
          >
            {move.name} {specialMoveCooldowns[move.name] > 0 ? `(${specialMoveCooldowns[move.name]})` : ''}
          </button>
        ))}
      </div>
    )}

    <div className="battle-log">
      <div className="battle-messages">
        {battleLog.map((log, index) => (
          <div key={index} className="battle-message">{log}</div>
        ))}
      </div>
    </div>
  </div>
);
};

export default BattleSystem;