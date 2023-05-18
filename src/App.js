import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ClocksList from './components/ClocksList';
import NewClock from './components/NewClock';
import Header from './components/Header';
import moment from 'moment-timezone';
import { Route, Switch } from "react-router-dom";

function App() {
  const [clocks, setClocks] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [filteredClocks, setFilteredClocks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    timezone: "",
    imageDay: "",
    imageNight: ""
  })

  useEffect(() => {
    fetch('http://localhost:4000/capitals')
      .then(response => response.json())
      .then(clocksData => {
        setClocks(clocksData);
        setFilteredClocks(clocksData);
        setSelectedCity(clocksData.length > 0 ? clocksData[0].name : '');
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedCityData = clocks.find(city => city.name === selectedCity);
      if (selectedCityData && selectedCityData.timezone) {
        const cityTimezone = selectedCityData.timezone;
        const currentTime = moment().tz(cityTimezone).format('hh:mm:ss A');
        setCurrentTime(currentTime);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clocks, selectedCity]);

  const handleClockClick = city => {
    setSelectedCity(city);
  };

  const handleSearch = searchTerm => {
    const filteredClocks = clocks.filter(clock =>
      clock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClocks(filteredClocks);
  };

  function addClock(event){
    event.preventDefault()

    fetch("http://localhost:4000/capitals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application.json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newClock => setClocks([...clocks, newClock]))
  }



  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <main>
            <Header selectedCity={selectedCity} currentTime={currentTime} />
            <Search handleSearch={handleSearch} />
            <ClocksList
              clocks={filteredClocks}
              handleClockClick={handleClockClick}
              setSelectedCity={setSelectedCity}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
            />
            <NewClock 
              addClock={addClock}
              updateFormData={updateFormData}
            />
          </main>
        </Route>
        <Route path="/search">
          <Search handleSearch={handleSearch} />
          <ClocksList
            clocks={filteredClocks}
            handleClockClick={handleClockClick}
            setSelectedCity={setSelectedCity}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        </Route>
        <Route path="/clocks">
          <ClocksList
            clocks={filteredClocks}
            handleClockClick={handleClockClick}
            setSelectedCity={setSelectedCity}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        </Route>
        <Route path="/addNewClock">
          <NewClock 
            addClock={addClock}
            updateFormData={updateFormData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
