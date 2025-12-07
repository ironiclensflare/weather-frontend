import '../css/WeatherForecast.css'

function WeatherForecast({ forecast }) {
  let tempClass = (forecast.temperatureC > 25) ? 'hot' : (forecast.temperatureC < 10) ? 'cold' : 'mild';
  return (
    <div className={`weather-forecast temp-${tempClass}`}>
      <h3>{forecast.date}</h3>
      <p>Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
      <p>Summary: {forecast.summary}</p>
    </div>
  )
}

export default WeatherForecast
