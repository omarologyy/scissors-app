// src/components/QRCodeGenerator.tsx
import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

interface QRCodeGeneratorProps {
  url: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url }) => {
  return (
    <div>
      <QRCodeCanvas value={url} />
    </div>
  )
}

export default QRCodeGenerator
