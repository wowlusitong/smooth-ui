import React from 'react'
// import { ThemeProvider } from '@xstyled/styled-components'
import { Provider } from '../../../packages/core-sc/src/index'

export default function Layout({ children }) {
  return <Provider>{children}</Provider>
}
