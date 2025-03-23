import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#1e1e1e',
  color: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  border: '1px solid #d4af37',
  zIndex: 1000,
  width: '90%',
  maxWidth: '600px',
  boxShadow: '0 0 20px rgba(0,0,0,0.4)'
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 999
};

const HowToPlayDialog = ({ onClose, open }) => {
  if(!open) return null;
  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <h2>How to Play</h2>
        <p>
          In <strong>Tales of the First Age</strong>, you can explore two main modes:
        </p>
  
        <h3 style={{ marginTop: '1rem', color: '#d4af37' }}>📖 Story Mode</h3>
        <ul>
          <li>📜 Experience a legendary character's story through illustrated choices.</li>
          <li>🧠 Make decisions that influence how the tale unfolds.</li>
          <li>⚔️ Fight in key battles using a simple turn-based system.</li>
          <li>🗺️ Track each character's journey on an interactive map.</li>
        </ul>
  
        <h3 style={{ marginTop: '1.5rem', color: '#d4af37' }}>🧠 Quiz Mode</h3>
        <ul>
          <li>🔍 Test your knowledge of the First Age of Middle-earth.</li>
          <li>🎯 Choose from categories like Geography, Lineages, and Weapons.</li>
          <li>🔥 Select a difficulty tied to iconic characters like Beren, Túrin, or Fëanor.</li>
          <li>🎉 Earn glory with perfect scores — and maybe some confetti!</li>
        </ul>
  
        <p style={{ marginTop: '1rem' }}>
          Every playthrough offers a new path or challenge, shaped by your choices — or your knowledge.
          Will you follow the tale or prove your wisdom in the lore of Arda?
        </p>
  
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Close</button>
      </div>
    </>
  );
};

export default HowToPlayDialog;