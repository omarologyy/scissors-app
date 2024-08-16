// src/tests/UrlShortener.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import UrlShortener from '../components/UrlShortener'

test('renders UrlShortener component', () => {
  render(<UrlShortener />)
  expect(screen.getByText(/URL Shortener/i)).toBeInTheDocument()
})

test('handles URL shortening', async () => {
  render(<UrlShortener />)
  fireEvent.change(screen.getByLabelText(/Original URL/i), {
    target: { value: 'https://example.com' },
  })
  fireEvent.click(screen.getByText(/Shorten URL/i))

  expect(await screen.findByText(/Shortened URL:/i)).toBeInTheDocument()
})
