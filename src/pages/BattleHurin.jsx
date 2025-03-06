import React, { useState } from 'react';
import BattleSystem from '../components/BattleSystem';
import BattleMusic from '../components/BattleMusic';

const BattleHurin = () => {
  const [battleState, setBattleState] = useState('start');
  
  const hurinConfig = {
    character: "Húrin",
    enemyName: "Orc Horde",
    playerDamageRange: [8, 18],
    enemyDamageRange: [12, 22],
    playerImage: "/assets/characters/Hurin2.png",
    enemyImage: "/assets/characters/Orcs.png",
    specialMoves: [
      {
        name: "Dragon-helm Strike",
        damage: [15, 25],
        cooldown: 3
      },
      {
        name: "Aurë Entuluva!",
        damage: [20, 35],
        cooldown: 5
      }
    ],
    urlName: "hurin",
    onBattleStateChange: (state) => setBattleState(state)
  };

  return (
    <>
      <BattleMusic 
        src="/assets/music/hurin-battle.mp3" 
        battleState={battleState}
      />
      <BattleSystem {...hurinConfig} />
    </>
  );
};

export default BattleHurin;