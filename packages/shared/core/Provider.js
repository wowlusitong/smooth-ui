import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import * as theme from './theming2/index'

export function Provider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}
