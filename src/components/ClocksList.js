import React from 'react'
import Clock from './Clock'

function ClocksList({clocks, handleClockClick, setSelectedCity, currentTime, setCurrentTime}){

    const clockElements = clocks.map((clock) => (
    <Clock 
        key={clock.id} 
        clock={clock} 
        handleClockClick={handleClockClick} 
        setSelectedCity={setSelectedCity}
        currentTime={currentTime}
        />
    ))

    return (
        <ul className='clock-container'>
            {clockElements}
        </ul>
    )
}

export default ClocksList