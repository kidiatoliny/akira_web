import React from 'react'

import NextButton from '../../components/Button/NextButton'
import Layout from '../../components/Layout'
import SocialIcons from '../../components/SocialIcons'
import logo from './../../assets/home_illustration.svg'
import {
  MainContent,
  Description,
  Title,
  SubTitle,
  Logo,
  Footer,
  Container,
  SocialIconsWrapper
} from './styles'
const Home: React.FC = () => {
  return (
    <Layout>
      <Container>
        <MainContent>
          <Description>
            <Title>O SEU PARCEIRO IDEAL</Title>
            <SubTitle>
              Atuamos em diversas areas do mercado com o objetivo de
              proporcionar aos nossos clientes uma experiencia inovadora no
              conforto do seu lar
            </SubTitle>
            <SocialIconsWrapper>
              <SocialIcons />
            </SocialIconsWrapper>
          </Description>
          <Logo src={logo} alt="akira logo" />
        </MainContent>
        <Footer>
          <NextButton link="/" />
        </Footer>
      </Container>
    </Layout>
  )
}

export default Home
