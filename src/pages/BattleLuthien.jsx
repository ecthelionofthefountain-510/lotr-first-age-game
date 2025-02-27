import React from 'react';
import BattleSystem from '../components/BattleSystem';

const BattleLuthien = () => {
  const luthienConfig = {
    character: "Lúthien",
    enemyName: "Sauron",
    playerDamageRange: [15, 25],     // Ökat grundskada
    enemyDamageRange: [5, 15],       // Minskat Saurons skada
    playerImage: "/assets/story-scenes/luthien-huan.png",
    enemyImage: "/assets/story-scenes/sauron-werewolf.png",
    specialMoves: [
      {
        name: "Song of Power",
        damage: [25, 35],            // Ökat specialskada
        cooldown: 2                  // Minskat cooldown
      },
      {
        name: "Dance of Enchantment",
        damage: [30, 40],            // Ökat specialskada
        cooldown: 4                  // Minskat cooldown
      }
    ],
    urlName: "luthien",
    continueToStory: true            // Fortsätt storyn efter vinst
  };

  return <BattleSystem {...luthienConfig} />;
};

export default BattleLuthien;