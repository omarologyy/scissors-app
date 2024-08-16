// src/utils/tinyurl.ts
import axios from 'axios'

export const shortenUrl = async (originalUrl: string): Promise<string> => {
  const response = await axios.get(
    `https://api.tinyurl.com/create?url=${originalUrl}&api_token=${process.env.TINYURL_API_TOKEN}`
  )
  return response.data.data.tiny_url
}
