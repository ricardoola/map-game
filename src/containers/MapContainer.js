import React from 'react';
import { UsMap } from '../components/maps/UsMap';

const MapContainer = ({ correctState, onStateClick, stateColors }) => {
  const handleStateClick = (stateName) => {
    onStateClick(stateName);
  };

  return (
    <div className='bg-container_blue'>
      <UsMap 
        correctState={correctState} 
        onStateClick={handleStateClick} 
        stateColors={stateColors} // Pass down stateColors
      />
    </div>
  );
};

export default MapContainer;
