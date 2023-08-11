import iconData from "../data/iconData.json";
import "../styles/ForecastSummary.css";

function ForecastSummary({ date, description, icon, onSelect, temperature }) {
  const formattedDate = new Date(date).toDateString();
  const weatherCode = `${icon.slice(0, 1)}00`;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon > 800 ? (
          <img src={iconData[802]} alt={description} />
        ) : (
          <img src={iconData[weatherCode]} alt={description} />
        )}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max} &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details:
      </button>
    </div>
  );
}

export default ForecastSummary;
