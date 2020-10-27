import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import { darkTheme, lightTheme } from './theme'
import GlobalStyles from './theme/GlobalStyles'

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme)
  // const toggleTheme = () => {
  //   setTheme(theme.type === 'dark' ? lightTheme : darkTheme)
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
