import React from 'react'

import akiraLogo from '../../assets/logo.svg'
import { Container, Img } from './styles'

const Logo: React.FC = () => {
  return (
    <Container>
      <Img src={akiraLogo} alt="app logo" />
      <strong>Akira </strong>
      <span>corporation</span>
    </Container>
  )
}

export default Logo
