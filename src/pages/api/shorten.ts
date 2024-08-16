import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

interface ShortenResponse {
  shortUrl: string
}

interface ErrorResponse {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShortenResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { longUrl, customAlias } = req.body

  if (!longUrl) {
    return res.status(400).json({ error: 'Long URL is required' })
  }

  try {
    const apiUrl = `https://api.tinyurl.com/create`
    const apiToken = process.env.TINYURL_API_KEY

    const response = await axios.post(
      apiUrl,
      {
        url: longUrl,
        domain: 'tinyurl.com',
        alias: customAlias || undefined,
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const shortUrl = response.data.data.tiny_url
    res.status(200).json({ shortUrl })
  } catch (error) {
    console.error('Error shortening URL:', error)
    res.status(500).json({ error: 'Failed to shorten URL' })
  }
}
