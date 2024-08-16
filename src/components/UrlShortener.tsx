import { useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosError } from 'axios'

interface ErrorResponse {
  error: string
}

const UrlShortener = () => {
  const [url, setUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('/api/shorten', {
        longUrl: url, // Updated key to 'longUrl'
        customAlias,
      })

      const shortenedUrl = response.data.shortUrl // Ensure this matches the API response
      router.push({
        pathname: '/result',
        query: { url, customUrl: shortenedUrl },
      })
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>
      setError(axiosError.response?.data.error || 'Failed to shorten URL')
    }
  }

  return (
    <div className="url-shortener">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL to shorten"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Custom Alias (optional)"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
        />
        <button type="submit">Shorten</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default UrlShortener
