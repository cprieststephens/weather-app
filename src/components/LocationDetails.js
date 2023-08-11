function LocationDetails({ city, country, errorMessage }) {
  LocationDetails.defaultProps = {
    errorMessage: "",
  };
  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  if (!errorMessage && !city) {
    return <h1>Please wait, your forecasts are loading.</h1>;
  }
  return <h1>{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
