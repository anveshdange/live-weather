import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Modules/CityComponent";
import WeatherComponent from "./Modules/WeatherInfoComponent";
import Axios from "axios";

const API_KEY = "d12633dce2e5671587e8c7ee32e86964";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
const Anvesh = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App </AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
