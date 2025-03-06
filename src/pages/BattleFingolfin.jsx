import React, { useState } from 'react';
import BattleSystem from '../components/BattleSystem';
import BattleMusic from '../components/BattleMusic';

const BattleFingolfin = () => {
  const [battleState, setBattleState] = useState('start');
  
  const fingolfinConfig = {
    character: "Fingolfin",
    enemyName: "Morgoth",
    playerDamageRange: [5, 15],
    enemyDamageRange: [10, 30],
    playerImage: "/assets/characters/Fingolfin2.png",
    enemyImage: "/assets/characters/Morgoth.png",
    specialMoves: [
      {
        name: "Ringil's Strike",
        damage: [15, 25],
        cooldown: 3
      },
      {
        name: "High King's Wrath",
        damage: [20, 30],
        cooldown: 5
      }
    ],
    onBattleStateChange: (state) => setBattleState(state)
  };

  return (
    <>
      <BattleMusic 
        src="/assets/music/fingolfin-vs-morgoth.mp3" 
        battleState={battleState}
      />
      <BattleSystem {...fingolfinConfig} />
    </>
  );
};

export default BattleFingolfin;