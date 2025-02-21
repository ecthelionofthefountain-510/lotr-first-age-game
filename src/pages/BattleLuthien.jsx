import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';


const BattleLuthien = () => {
  const { currentCharacter } = useGameStore();
  const navigate = useNavigate();

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isBattleActive, setIsBattleActive] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isBattleActive) {
      const battleInterval = setInterval(() => {
        if (playerHP > 0) {
          const playerDamage = Math.floor(Math.random() * 15) + 5; // Lúthien's magical attacks
          const enemyDamage = Math.floor(Math.random() * 20) + 10; // Sauron's counterattacks

          setAnimationClass('magic-effect'); // Trigga en magisk effekt vid attack
          setEnemyHP((prev) => Math.max(1, prev - playerDamage));
          setBattleLog((prev) => [...prev, `${currentCharacter} sings a powerful enchantment, dealing ${playerDamage} damage to Sauron!`]);

          setTimeout(() => {
            setPlayerHP((prev) => Math.max(0, prev - enemyDamage));
            setBattleLog((prev) => [...prev, `Sauron retaliates, sending dark magic at ${currentCharacter}, dealing ${enemyDamage} damage!`]);
            setAnimationClass('dark-magic-effect'); // Trigga en mörk attack från Sauron
          }, 1000);
        }

        if (playerHP <= 0) {
          clearInterval(battleInterval);
          setTimeout(() => navigate("/end-luthien"), 3000);
        }
      }, 2000);

      return () => clearInterval(battleInterval);
    }
  }, [playerHP, enemyHP, isBattleActive, navigate, currentCharacter]);

  return (
    <div className="battle-wrapper">
      <img src="/assets/story-scenes/luthien-doriath2.png" alt="Lúthien" className={`battle-character character-left ${animationClass}`} />
      <div className="battle-container">
        <h1>Lúthien vs Sauron</h1>
        <div className="health-bars">
          <div className="player-health">
            <p>{currentCharacter} HP: {playerHP}</p>
            <div className="health-bar"><div style={{ width: `${playerHP}%` }} className="hp"></div></div>
          </div>
          <div className="enemy-health">
            <p>Sauron HP: {enemyHP}</p>
            <div className="health-bar"><div style={{ width: `${enemyHP}%` }} className="hp enemy"></div></div>
          </div>
        </div>
        <div className="battle-log">
          {battleLog.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
      <img src="/assets/story-scenes/luthien-vs-sauron.png" alt="Sauron" className="battle-character character-right" />
    </div>
  );
};

export default BattleLuthien;