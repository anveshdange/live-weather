import styled from "styled-components";
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
    width: 180px;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
const Anvesh = styled.div`
  font-size: 9px;
  font-weight: bold;
`;

const CityComponent = (props) => {
  return (
    <>
      <WeatherLogo src="./Icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your City.</ChooseCityLabel>

      <SearchBox onSubmit={props.fetchWeather}>
        <input
          placeholder="Type your city name here."
          onChange={(e) => props.updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>

      <Anvesh>
        This web-App is made by{" "}
        <a href="https://www.bit.ly/anveshdange">Anvesh Dange</a>
      </Anvesh>
    </>
  );
};

export default CityComponent;
