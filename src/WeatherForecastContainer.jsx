import './WeatherForecastContainer.css'

function WeatherForecastContainer({ forecasts }) {
  if (!forecasts || forecasts.length === 0) {
    return <p>No forecast data available</p>
  }

  return (
    <div className="weather-forecast-container">
      {forecasts.map((forecast, index) => (
        <div key={index} className="weather-forecast-item">
            <h3>{forecast.date}</h3>
            <p>Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
            <p>Summary: {forecast.summary}</p>
        </div>
      ))}
    </div>
  )
}

export default WeatherForecastContainer