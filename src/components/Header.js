import React, { useState, useEffect } from 'react';


function Header({ selectedCity, currentTime }) {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isDayMode, setIsDayMode] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/capitals")
      .then(response => response.json())
      .then(data => {
        const selectedCityData = data.find(city => city.name === selectedCity);
        if (selectedCityData && selectedCityData.imageDay) {
          setBackgroundImage(isDayMode ? selectedCityData.imageDay : selectedCityData.imageNight);
        }
      });
  }, [selectedCity, isDayMode]);

  function handleDayLightToggle(){
    setIsDayMode((isDayMode) => !isDayMode) 
  }

  return (
    <header 
      className="App-header" 
      style={{ 
          backgroundImage: `url(${backgroundImage})`,
          color: isDayMode ? 'black' : 'white' 
        }}
      onClick={handleDayLightToggle}
    >
      <div className='box'> 
        <h1 className='city'>{selectedCity}</h1>
        <h2 className='time'>{currentTime}</h2>
      </div>
    </header>
  );
}

export default Header;
