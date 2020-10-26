import React, { useContext, useState } from 'react'
import { ThemeContext, ThemeProvider } from 'styled-components'

import { lightTheme } from '../../theme'
import Logo from '../Logo'
import Menu from '../Menu'
import ToggleTheme from '../ToggleTheme'
import { Container, Nav } from './styles'

const NavBar: React.FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Logo />
      <Nav>
        <Menu />
        <ToggleTheme
          onChange={() => {
            alert('cliked')
          }}
        />
      </Nav>
    </Container>
  )
}

export default NavBar
