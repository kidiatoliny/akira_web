import React from 'react'

import { Logo, Title } from '../../pages/Home/styles'
import SocialIcons from '../SocialIcons'
import sideBarLogo from './../../assets/logo.svg'
import { Container, Footer, MainContent, Header } from './styles'
const SideBar: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={sideBarLogo} />
        <Title>Servicos</Title>
      </Header>
      <MainContent>
        <p>
          lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          officia ab obcaecati accusantium culpa laudantium magnam! Voluptas
          tempora architecto laudantium harum quod error fugit aliquid est
          perspiciatis. Necessitatibus, optio delectus! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quidem harum rem eius? Beatae
          facilis.
        </p>
      </MainContent>
      <Footer>
        <SocialIcons />
      </Footer>
    </Container>
  )
}

export default SideBar
