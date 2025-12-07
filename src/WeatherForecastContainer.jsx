import './WeatherForecastContainer.css'
import WeatherForecast from './WeatherForecast'

function WeatherForecastContainer({ forecasts }) {
  if (!forecasts || forecasts.length === 0) {
    return <p>No forecast data available</p>
  }

  return (
    <div className="weather-forecast-container">
      {forecasts.map((forecast, index) => (
        <WeatherForecast key={index} forecast={forecast} />
      ))}
    </div>
  )
}

export default WeatherForecastContainer