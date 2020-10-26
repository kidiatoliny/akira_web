import React from 'react'

import NavBar from '../NavBar'
import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  )
}

export default Layout
