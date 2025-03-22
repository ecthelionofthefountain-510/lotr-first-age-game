
import React, { useState, useEffect } from 'react';
import JourneyMap from '../components/JourneyMap';
import JourneyInfoModal from '@/components/JourneyInfoModal';



const JourneyPage = () => {
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('seeJourneyModal');
    if (!seen) {
      setShowInfo(true);
      sessionStorage.setItem('seenJourneyModal', 'true');
    }
  }, [])

  return (
    <div>
      {showInfo && <JourneyInfoModal onClose={() => setShowInfo(false)} />}
      <JourneyMap />
    </div>
  );
};

export default JourneyPage;