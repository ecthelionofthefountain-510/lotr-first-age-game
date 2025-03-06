import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ending.css';

const FeanorEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>The Fall of Fëanor</h1>
      <img src="/assets/story-scenes/feanor-death.png" alt="Fëanor's final stand" className="end-image" />
      <p>Surrounded by Balrogs, Fëanor fights with unmatched fury. His blazing sword claims many foes, but even the mightiest of the Noldor cannot withstand such numbers.</p>
      <p>Mortally wounded, Fëanor is carried by his sons to a nearby hill. With his dying breath, he commands them to keep their oath and recover the Silmarils. His fiery spirit burns so hot that his body turns to ash upon death.</p>
      <p>As the flames of his body rise high into the sky, the echo of his oath lives on through his sons—a legacy that will shape the fate of Middle-earth for ages to come.</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default FeanorEnd;