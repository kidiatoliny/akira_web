import React, { useContext } from 'react'
import {
  MdCamera,
  MdCameraRoll,
  MdDesktopMac,
  MdLayers,
  MdMusicNote,
  MdPhoto
} from 'react-icons/md'
import { ThemeContext } from 'styled-components'

import Layout from '../../components/Layout'
import NextButton from '../../components/NextButton'
import ServiceCard from '../../components/ServiceCard'
import SideBar from '../../components/SideBar'
import { Container, ServicesWrapper } from './styles'

const Services: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Layout>
      <Container>
        <SideBar>fsfs</SideBar>
        <ServicesWrapper>
          <ServiceCard title="Design & Multimedia">
            <MdLayers size={128} color={colors.primary} />
          </ServiceCard>
          <ServiceCard title="Tecnologia">
            <MdDesktopMac size={128} color={colors.primary} />
          </ServiceCard>
          <ServiceCard title="Musica">
            <MdMusicNote size={128} color={colors.primary} />
          </ServiceCard>
          <ServiceCard title="Fotografia">
            <MdCamera size={128} color={colors.primary} />
          </ServiceCard>
        </ServicesWrapper>
        <NextButton link="/clients" />
      </Container>
    </Layout>
  )
}

export default Services
