import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WeatherForecastContainer from './WeatherForecastContainer'

describe('WeatherForecastContainer', () => {
  const mockForecasts = [
    {
      date: '2025-12-07',
      temperatureC: 20,
      temperatureF: 68,
      summary: 'Partly Cloudy'
    },
    {
      date: '2025-12-08',
      temperatureC: 15,
      temperatureF: 59,
      summary: 'Sunny'
    },
    {
      date: '2025-12-09',
      temperatureC: 8,
      temperatureF: 46,
      summary: 'Rainy'
    }
  ]

  it('renders multiple forecast items', () => {
    render(<WeatherForecastContainer forecasts={mockForecasts} />)
    
    expect(screen.getByText('2025-12-07')).toBeInTheDocument()
    expect(screen.getByText('2025-12-08')).toBeInTheDocument()
    expect(screen.getByText('2025-12-09')).toBeInTheDocument()
  })

  it('renders all forecast summaries', () => {
    render(<WeatherForecastContainer forecasts={mockForecasts} />)
    
    expect(screen.getByText('Summary: Partly Cloudy')).toBeInTheDocument()
    expect(screen.getByText('Summary: Sunny')).toBeInTheDocument()
    expect(screen.getByText('Summary: Rainy')).toBeInTheDocument()
  })

  it('displays "no data" message when forecasts array is empty', () => {
    render(<WeatherForecastContainer forecasts={[]} />)
    
    expect(screen.getByText('No forecast data available')).toBeInTheDocument()
  })

  it('displays "no data" message when forecasts is null', () => {
    render(<WeatherForecastContainer forecasts={null as any} />)
    
    expect(screen.getByText('No forecast data available')).toBeInTheDocument()
  })

  it('renders with correct container class', () => {
    const { container } = render(<WeatherForecastContainer forecasts={mockForecasts} />)
    
    expect(container.querySelector('.weather-forecast-container')).toBeInTheDocument()
  })

  it('renders correct number of forecast items', () => {
    const { container } = render(<WeatherForecastContainer forecasts={mockForecasts} />)
    
    const forecastItems = container.querySelectorAll('.weather-forecast')
    expect(forecastItems).toHaveLength(3)
  })
})
