import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Layout from '../../components/Layout'
import NextButton from '../../components/NextButton'
import SocialIcons from '../../components/SocialIcons'
import logoDark from './../../assets/designer_dark.svg'
import logoLight from './../../assets/designer.svg'
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
  const { type } = useContext(ThemeContext)
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
          <Logo src={type === 'dark' ? logoDark : logoLight} alt="akira logo" />
        </MainContent>
        <Footer>
          <NextButton link="/" />
        </Footer>
      </Container>
    </Layout>
  )
}

export default Home
