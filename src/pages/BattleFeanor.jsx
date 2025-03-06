import React, { useState } from 'react';
import BattleSystem from '../components/BattleSystem';
import BattleMusic from '../components/BattleMusic';

const BattleFeanor = () => {
  const [battleState, setBattleState] = useState('start');
  
  const feanorConfig = {
    character: "Fëanor",
    enemyName: "Balrogs",
    playerDamageRange: [10, 20],
    enemyDamageRange: [15, 25],
    playerImage: "/assets/characters/Feanor.png",
    enemyImage: "/assets/characters/Balrogs.png",
    specialMoves: [
      {
        name: "Spirit of Fire",
        damage: [20, 30],
        cooldown: 3
      },
      {
        name: "Wrath of the Noldor",
        damage: [25, 35],
        cooldown: 5
      }
    ],
    urlName: "feanor", // This is crucial for proper navigation to FeanorEnd
    onBattleStateChange: (state) => setBattleState(state)
  };

  return (
    <>
      <BattleMusic 
        src="/assets/music/feanor-battle.mp3" 
        battleState={battleState}
      />
      <BattleSystem {...feanorConfig} />
    </>
  );
};

export default BattleFeanor;