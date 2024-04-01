import React, { useState, useEffect } from 'react'

const TotalTime = () => {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='m-2 text-xl'>
        <p id='timeLabel_total'>Total Time</p>
        <div id='timer_total' className='bg-time_blue'>
            <p id='time_total'>{seconds}</p>
        </div>
    </div>
  )
}

export default TotalTime