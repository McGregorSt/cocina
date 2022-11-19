import React from 'react'
import MainTemplate from '../template/MainTemplate'

const ThemeProvider = ({ theme, children }) => {
  return (
    <div>
      <MainTemplate theme={theme}>{children}</MainTemplate>
    </div>
  )
}

export default ThemeProvider
