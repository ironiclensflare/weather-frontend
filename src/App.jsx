import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5082/weatherforecast')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Frontend</h1>
      </header>
      
      <main className="App-main">
        {loading && (
          <div className="loading">
            <p>Loading data...</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <p>Make sure your API server is running on http://localhost:3000</p>
          </div>
        )}
        
        {data && !loading && !error && (
          <div className="data-container">
            <h2>API Response:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
