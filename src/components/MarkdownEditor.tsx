// src/components/MarkdownEditor.tsx
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('')

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your markdown content here"
      />
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownEditor
