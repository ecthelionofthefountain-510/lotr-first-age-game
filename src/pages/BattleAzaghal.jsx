import React, { useState } from 'react';
import BattleSystem from '../components/BattleSystem';
import BattleMusic from '../components/BattleMusic';

const BattleAzaghal = () => {
  const [battleState, setBattleState] = useState('start');
  
  const azaghalConfig = {
    character: "Azaghal",
    enemyName: "Glaurung",
    playerDamageRange: [5, 15],
    enemyDamageRange: [10, 25],
    playerImage: "/assets/characters/Azaghal.png",
    enemyImage: "/assets/characters/Glaurung.png",
    specialMoves: [
      {
        name: "Dwarven Axe",
        damage: [15, 25],
        cooldown: 3
      },
      {
        name: "Dragon's Bane",
        damage: [20, 30],
        cooldown: 5
      }
    ],
    onBattleStateChange: (state) => setBattleState(state)
  };

  return (
    <>
      <BattleMusic 
        src="/assets/music/dwarf-battle.mp3" 
        battleState={battleState}
      />
      <BattleSystem {...azaghalConfig} />
    </>
  );
};

export default BattleAzaghal;