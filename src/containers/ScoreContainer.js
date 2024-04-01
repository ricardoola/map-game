import React from 'react'
import TotalTime from '../components/time/TotalTime';
import CurrentTime from '../components/time/CurrentTime';
import PlacesFound from '../components/time/PlacesFound';

const ScoreContainer = () => {
  return (
    <div className='bg-container_blue mr-8 w-80' >
        <TotalTime />
        <CurrentTime />
        <PlacesFound />
    </div>
  )
}

export default ScoreContainer