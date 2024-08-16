// src/tests/MarkdownEditor.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import MarkdownEditor from '../components/MarkdownEditor'

test('renders MarkdownEditor component', () => {
  render(<MarkdownEditor />)
  expect(screen.getByText(/Markdown Editor/i)).toBeInTheDocument()
})

test('handles markdown input', async () => {
  render(<MarkdownEditor />)
  fireEvent.change(screen.getByLabelText(/Markdown/i), {
    target: { value: '# Hello World' },
  })

  expect(await screen.findByText(/Hello World/i)).toBeInTheDocument()
})
