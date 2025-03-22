// src/components/ui/JourneyInfoModal.jsx
import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#1e1e1e',
  color: '#f5e6c8',
  padding: '2rem',
  borderRadius: '12px',
  border: '1px solid #d4af37',
  zIndex: 1000,
  width: '90%',
  maxWidth: '600px',
  fontFamily: 'Uncial Antiqua, serif',
  textAlign: 'center',
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

const JourneyInfoModal = ({ onClose }) => {
  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <h2>🗺️ Character Journeys</h2>
        <p>Click on any character in the left menu to see their path unfold across the map of Beleriand.</p>
        <p>You can view stops, names of key locations, and track their legendary journey.</p>
        <button onClick={onClose} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Close</button>
      </div>
    </>
  );
};

export default JourneyInfoModal;