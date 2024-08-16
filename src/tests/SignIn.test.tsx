// src/tests/SignIn.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // Import this to ensure the custom matchers are available
import SignIn from '../components/SignIn'

test('renders SignIn component', () => {
  render(<SignIn />)
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
})

test('handles sign in', async () => {
  render(<SignIn />)
  fireEvent.change(screen.getByPlaceholderText(/Email/i), {
    target: { value: 'test@example.com' },
  })
  fireEvent.change(screen.getByPlaceholderText(/Password/i), {
    target: { value: 'password' },
  })
  fireEvent.click(screen.getByText(/Sign In/i))

  // Mock the alert function
  jest.spyOn(window, 'alert').mockImplementation(() => {})

  expect(
    await screen.findByText(/Signed in successfully!/i)
  ).toBeInTheDocument()
})
