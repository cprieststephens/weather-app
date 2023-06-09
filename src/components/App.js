import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ forecasts, location }) {
  const { city, country } = location;
  return (
    <div>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
