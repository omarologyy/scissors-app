// pages/api/qrcode.ts
import { NextApiRequest, NextApiResponse } from 'next'
import QRCode from 'qrcode'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  if (!url || typeof url !== 'string') {
    return res.status(400).send('Invalid URL')
  }

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url)
    res.status(200).json({ qrCodeDataUrl })
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate QR code' })
  }
}
