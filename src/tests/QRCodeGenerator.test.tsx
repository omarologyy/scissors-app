// src/tests/QRCodeGenerator.test.tsx
import { render } from '@testing-library/react'
import QRCodeGenerator from '../components/QRCodeGenerator'

test('renders QRCodeGenerator component', () => {
  render(<QRCodeGenerator url="https://example.com" />)
  expect(document.querySelector('canvas')).toBeInTheDocument()
})
