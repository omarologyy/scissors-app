// pages/result.tsx
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Result = () => {
  const router = useRouter()
  const { url, customUrl } = router.query
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  const getSingleString = (param: string | string[]): string => {
    return Array.isArray(param) ? param[0] : param
  }

  const urlString = getSingleString(url as string | string[])
  const customUrlString = getSingleString(customUrl as string | string[])

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get('/api/qrcode', {
          params: { url: customUrlString },
        })
        setQrCodeUrl(response.data.qrCodeDataUrl)
      } catch (error) {
        console.error('Failed to fetch QR code:', error)
      }
    }

    fetchQRCode()
  }, [customUrlString])

  const downloadQRCode = () => {
    const link = document.createElement('a')
    link.href = qrCodeUrl
    link.download = 'qrcode.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container">
      <header>
        <h1>URL Shortener</h1>
        <button onClick={() => router.push('/signin')}>Logout</button>
      </header>
      <div>
        <h2>Your Shortened URL</h2>
        <p>{customUrlString}</p>
        <button onClick={() => navigator.clipboard.writeText(customUrlString)}>
          Copy URL
        </button>
        <div className="qr-code">
          {qrCodeUrl && (
            <>
              <img src={qrCodeUrl} alt="QR Code" />
              <button onClick={downloadQRCode}>Download QR Code</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Result

