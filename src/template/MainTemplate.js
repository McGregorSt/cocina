import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'

const MainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default MainTemplate
