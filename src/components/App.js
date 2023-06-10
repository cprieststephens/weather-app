import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

import "../styles/App.css";

function App({ forecasts, location }) {
  const { city, country } = location;
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
