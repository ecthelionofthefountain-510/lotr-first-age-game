import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ending.css';

const MelianEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="end-container">
      <h1>Melian's Return</h1>
      <img src="/assets/story-scenes/melian-valinor.jpg" alt="Melian returning to Valinor" className="end-image" />
      <p>With the death of Thingol and the fading of Doriath, Melian's time in Middle-earth comes to an end. The Girdle of Enchantment dissolves, and she departs the land she protected for ages.</p>
      <p>Returning to Valinor, she carries with her the wisdom, love, and grief of her time among the Children of Ilúvatar. Her songs in the Gardens of Lórien now tell of stars reflected in the waters of Cuiviénen, of the depths of elven love, and of the bittersweet gift of mortality.</p>
      <p>Though separated from those she loved in Middle-earth, Melian's influence continues through the lineage of her daughter Lúthien, touching the ages of the world to come.</p>
      <button className="restart-button" onClick={() => navigate('/')}>Back to Menu</button>
    </div>
  );
};

export default MelianEnd;