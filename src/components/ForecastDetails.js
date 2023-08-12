import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div>{formattedDate}</div>
      <div>
        <span className="forecast-details__bold">Min temperature: </span>
        {temperature.min} &deg;C
      </div>
      <div>
        <span className="forecast-details__bold">Max temperature: </span>
        {temperature.max} &deg;C
      </div>
      <div>
        <span className="forecast-details__bold">Humidity:</span> {humidity} %
      </div>
      <div>
        <span className="forecast-details__bold">Wind speed:</span> {wind.speed}
        mph
      </div>
    </div>
  );
}

export default ForecastDetails;
