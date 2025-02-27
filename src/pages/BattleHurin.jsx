import React from 'react';
import BattleSystem from '../components/BattleSystem';

const BattleHurin = () => {
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
    urlName: "hurin"
  };

  return <BattleSystem {...hurinConfig} />;
};

export default BattleHurin;