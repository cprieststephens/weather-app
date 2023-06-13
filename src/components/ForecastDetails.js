import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        <strong>Min temperature:</strong> {temperature.min} &deg;C
      </div>
      <div className="forecast-details__max-temp">
        <strong>Max temperature:</strong> {temperature.max} &deg;C
      </div>
      <div className="forecast-details__humidity">
        <strong>Humidity:</strong> {humidity} %
      </div>
      <div className="forecast-details__wind">
        <strong>Wind speed:</strong> {wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
