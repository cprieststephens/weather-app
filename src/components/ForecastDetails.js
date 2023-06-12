import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
  const { forecast } = props;
  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        <strong>Min temperature:</strong> {forecast.temperature.min} &deg;C
      </div>
      <div className="forecast-details__max-temp">
        <strong>Max temperature:</strong> {forecast.temperature.max} &deg;C
      </div>
      <div className="forecast-details__humidity">
        <strong>Humidity:</strong> {forecast.humidity} %
      </div>
      <div className="forecast-details__wind">
        <strong>Wind speed:</strong> {forecast.wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
