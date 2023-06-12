import "../styles/ForecastDetails.css";

function ForecastDetails(props) {
  const { forecast } = props;
  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        Min temperature: {forecast.temperature.min} &deg;C
      </div>
      <div className="forecast-details__max-temp">
        Max temperature: {forecast.temperature.max} &deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity} %
      </div>
      <div className="forecast-details__wind">
        Wind speed: {forecast.wind.speed} mph
      </div>
    </div>
  );
}

export default ForecastDetails;
