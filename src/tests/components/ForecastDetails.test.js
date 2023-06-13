import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 15,
    wind: {
      speed: 10,
      direction: "s",
    },
  };

  const validDate = "Thu Jan 01 1970";

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails

        date={validDate}
        min-temperature={validProps.temperature.min}
        max-temperature={validProps.temperature.max}
        humidity={validProps.humidity}
        wind={validProps.wind.speed}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <ForecastDetails
        //date={validProps.date}
        date={validDate}
        min-temperature={validProps.temperature.min}
        max-temperature={validProps.temperature.max}
        humidity={validProps.humidity}
        wind={validProps.wind.speed}
      />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("12 °C")).toHaveClass("forecast-details__min-temp");
    expect(getByText("22 °C")).toHaveClass("forecast-details__max-temp");
    expect(getByText("15 %")).toHaveClass("forecast-details__humidity");
    expect(getByText("10 mph")).toHaveClass("forecast-details__wind");
  });
});