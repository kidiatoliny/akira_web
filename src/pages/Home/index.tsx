import React from 'react'

import NextButton from '../../components/Button/NextButton'
import Layout from '../../components/Layout'
import SocialIcons from '../../components/SocialIcons'
import logo from './../../assets/logo.svg'
import {
  MainContent,
  Description,
  Title,
  SubTitle,
  Logo,
  Footer
} from './styles'
const Home: React.FC = () => {
  return (
    <Layout>
      <MainContent>
        <Description>
          <Title>O SEU PARCEIRO IDEAL</Title>
          <SubTitle>
            Atuamos em diversas areas do mercado com o objetivo de proporcionar
            aos nossos clientes uma experiencia inovadora no conforto do seu lar
          </SubTitle>
          <SocialIcons />
        </Description>
        <Logo src={logo} alt="akira logo" />
      </MainContent>
      <Footer>
        <NextButton link="/" />
      </Footer>
    </Layout>
  )
}

export default Home
