import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn()
  })

  it('renders the app title', () => {
    (globalThis.fetch as any).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: async () => []
      })
    )

    render(<App />)
    expect(screen.getByText('Weather Frontend')).toBeInTheDocument()
  })

  it('displays loading state initially', () => {
    (globalThis.fetch as any).mockImplementationOnce(() =>
      new Promise(() => {}) // Never resolves
    )

    render(<App />)
    expect(screen.getByText('Loading data...')).toBeInTheDocument()
  })

  it('displays weather data when fetch is successful', async () => {
    const mockData = [
      {
        date: '2025-12-07',
        temperatureC: 20,
        temperatureF: 68,
        summary: 'Sunny'
      }
    ];

    (globalThis.fetch as any).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: async () => mockData
      })
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText('API Response:')).toBeInTheDocument()
    })

    expect(screen.getByText('2025-12-07')).toBeInTheDocument()
    expect(screen.getByText('Summary: Sunny')).toBeInTheDocument()
  })

  it('displays error message when fetch fails', async () => {
    (globalThis.fetch as any).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500
      })
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument()
    })

    expect(screen.getByText(/HTTP error! status: 500/)).toBeInTheDocument()
  })

  it('displays error message when network request fails', async () => {
    (globalThis.fetch as any).mockImplementationOnce(() =>
      Promise.reject(new Error('Network error'))
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument()
    })

    expect(screen.getByText(/Network error/)).toBeInTheDocument()
  })

  it('fetches data from correct endpoint', () => {
    (globalThis.fetch as any).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: async () => []
      })
    )

    render(<App />)

    expect(globalThis.fetch).toHaveBeenCalledWith('http://localhost:5082/weatherforecast')
  })
})
