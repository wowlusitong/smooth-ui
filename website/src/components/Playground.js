import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'

export default function Playground({ children }) {
  return (
    <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
      <LiveProvider
        code={children.trim()}
        transformCode={code => `/** @jsx mdx */ ${code}`}
        scope={{ mdx }}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  )
}
