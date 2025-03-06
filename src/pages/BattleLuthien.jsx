import React, { useState } from 'react';
import BattleSystem from '../components/BattleSystem';
import BattleMusic from '../components/BattleMusic';

const BattleLuthien = () => {
  const [battleState, setBattleState] = useState('start');
  
  const luthienConfig = {
    character: "Lúthien",
    enemyName: "Sauron",
    playerDamageRange: [15, 25],
    enemyDamageRange: [5, 15],
    playerImage: "/assets/story-scenes/luthien-huan.png",
    enemyImage: "/assets/story-scenes/sauron-werewolf.png",
    specialMoves: [
      {
        name: "Song of Power",
        damage: [25, 35],
        cooldown: 2
      },
      {
        name: "Dance of Enchantment",
        damage: [30, 40],
        cooldown: 4
      }
    ],
    urlName: "luthien",
    continueToStory: true,
    onBattleStateChange: (state) => setBattleState(state)
  };

  return (
    <>
      <BattleMusic 
        src="/assets/music/luthien-vs-sauron.mp3" 
        battleState={battleState}
      />
      <BattleSystem {...luthienConfig} />
    </>
  );
};

export default BattleLuthien;