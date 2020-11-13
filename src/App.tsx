import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import ToggleTheme from './components/ToggleTheme'
import Routes from './routes'
import { darkTheme, lightTheme } from './theme'
import GlobalStyles from './theme/GlobalStyles'
import usePersistedState from './utils/usePersistedState'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', darkTheme)
  const handleToggleTheme = () => {
    setTheme(theme.type === 'dark' ? lightTheme : darkTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <ToggleTheme onChange={handleToggleTheme} />
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
