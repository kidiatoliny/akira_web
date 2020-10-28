import React from 'react'

import Logo from '../Logo'
import Menu from '../Menu'
import { Container, Nav } from './styles'

const NavBar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        <Menu />
      </Nav>
    </Container>
  )
}

export default NavBar
