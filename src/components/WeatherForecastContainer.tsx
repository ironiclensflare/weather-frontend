import '../css/WeatherForecastContainer.css'
import WeatherForecast from './WeatherForecast'

interface Forecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

interface WeatherForecastContainerProps {
  forecasts: Forecast[]
}

export default function WeatherForecastContainer({ forecasts }: WeatherForecastContainerProps) {
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
