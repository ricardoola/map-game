import React from 'react'
import PropTypes from 'prop-types'
import { stateObject } from '../components/maps/UsMap';


const StateToGuess = ({className, displayedState}) => {
  return (
    <div className={`${className} w-1/4 mx-auto bg-white rounded-md pt-4 pb-4 border-2 border- border-border_blue mb-4`}>
        <p className='text-center font-bold text-lg '>{stateObject[displayedState]}</p>
    </div>
  )
}
StateToGuess.propTypes = {
  className: PropTypes.string,
}
export default StateToGuess

