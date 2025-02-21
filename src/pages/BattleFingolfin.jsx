import React from 'react';
import BattleSystem from '../components/BattleSystem';

const BattleFingolfin = () => {
  const fingolfinConfig = {
    character: "Fingolfin",
    enemyName: "Morgoth",
    playerDamageRange: [5, 15],
    enemyDamageRange: [10, 30],
    playerImage: "/assets/characters/Fingolfin.png",
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
    ]
  };

  return <BattleSystem {...fingolfinConfig} />;
};

export default BattleFingolfin;