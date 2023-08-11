import { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const { city, country } = location;

  useEffect(() => {
    getForecast(
      "Manchester",
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []);

  return (
    <div className="weather-app">
      <div className="weather-app__top">
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        <LocationDetails
          city={city}
          country={country}
          errorMessage={errorMessage}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
      {!errorMessage && (
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
      )}
    </div>
  );
}

export default App;
