import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WeatherForecast from './WeatherForecast'

describe('WeatherForecast', () => {
  const mockForecast = {
    date: '2025-12-07',
    temperatureC: 20,
    temperatureF: 68,
    summary: 'Partly Cloudy'
  }

  it('renders forecast data correctly', () => {
    render(<WeatherForecast forecast={mockForecast} />)
    
    expect(screen.getByText('2025-12-07')).toBeInTheDocument()
    expect(screen.getByText('Temperature: 20°C / 68°F')).toBeInTheDocument()
    expect(screen.getByText('Summary: Partly Cloudy')).toBeInTheDocument()
  })

  it('applies cold temperature class when temperature is below 10°C', () => {
    const coldForecast = { ...mockForecast, temperatureC: 5 }
    const { container } = render(<WeatherForecast forecast={coldForecast} />)
    
    const forecastDiv = container.querySelector('.weather-forecast')
    expect(forecastDiv).toHaveClass('temp-cold')
  })

  it('applies mild temperature class when temperature is between 10°C and 25°C', () => {
    const mildForecast = { ...mockForecast, temperatureC: 20 }
    const { container } = render(<WeatherForecast forecast={mildForecast} />)
    
    const forecastDiv = container.querySelector('.weather-forecast')
    expect(forecastDiv).toHaveClass('temp-mild')
  })

  it('applies hot temperature class when temperature is above 25°C', () => {
    const hotForecast = { ...mockForecast, temperatureC: 30 }
    const { container } = render(<WeatherForecast forecast={hotForecast} />)
    
    const forecastDiv = container.querySelector('.weather-forecast')
    expect(forecastDiv).toHaveClass('temp-hot')
  })

  it('renders with correct structure', () => {
    const { container } = render(<WeatherForecast forecast={mockForecast} />)
    
    expect(container.querySelector('.weather-forecast')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})
