import '../css/WeatherForecast.css'

interface Forecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

interface WeatherForecastProps {
  forecast: Forecast
}

export default function WeatherForecast({ forecast }: WeatherForecastProps) {
  const tempClass = (forecast.temperatureC > 25) ? 'hot' : (forecast.temperatureC < 10) ? 'cold' : 'mild'
  
  return (
    <div className={`weather-forecast temp-${tempClass}`}>
      <h3>{forecast.date}</h3>
      <p>Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
      <p>Summary: {forecast.summary}</p>
    </div>
  )
}
