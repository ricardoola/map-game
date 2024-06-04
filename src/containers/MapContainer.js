import React from 'react'
import {UsMap} from '../components/maps/UsMap'

const MapContainer = ({correctState, onStateClick}) => {

  const handleStateClick = (stateName) => {
    onStateClick(stateName);
  };
  console.log('New state in MapContainer:', correctState);

  
  return (
    <div className='bg-container_blue'>
        <UsMap correctState={correctState} onStateClick={handleStateClick}/>
    </div>
   
  )
}

export default MapContainer