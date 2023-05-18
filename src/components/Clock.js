import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

function Clock({ clock, handleClockClick, setSelectedCity }) {
  const [currentClockTime, setCurrentClockTime] = useState('');
  const [isNightTime, setIsNightTime] = useState(false)

  const getCurrentTime = (timezone) => {
    const currentTime = moment().tz(timezone).format('hh:mm:ss A');
    return currentTime;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClockTime(getCurrentTime(clock.timezone));

      const currentTime = moment().tz(clock.timezone).hour()
      setIsNightTime(currentTime < 7 || currentTime >= 19)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clock.timezone]);

  const handleClick = () => {
    handleClockClick(clock.name);
    setSelectedCity(clock.name);
  };

  const clockItemStyle = {
    backgroundImage: isNightTime ? `url(${clock.imageNight})` : `url(${clock.imageDay})`,
    color: isNightTime ? 'white' : 'black'
  };

  return (
    <li className='clock-item' style={clockItemStyle} onClick={handleClick}>
      <h1>{clock.name}</h1>
      <h1>{currentClockTime}</h1>
    </li>
  );
}

export default Clock;
