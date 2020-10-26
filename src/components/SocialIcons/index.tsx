import React, { useContext } from 'react'
import {
  FiFacebook,
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

const SocialIcons: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      <Link to="https://facebook.com/kidiatoliny">
        <FiFacebook size={26} color={colors.primary} title="face" />
      </Link>
      <Link to="https://facebook.com/kidiatoliny">
        <FiTwitter size={26} color={colors.primary} />
      </Link>
      <Link to="https://facebook.com/kidiatoliny">
        <FiGithub size={26} color={colors.primary} />
      </Link>
      <Link to="https://facebook.com/kidiatoliny">
        <FiInstagram size={26} color={colors.primary} />
      </Link>
      <Link to="https://facebook.com/kidiatoliny">
        <FiLinkedin size={26} color={colors.primary} />
      </Link>
    </Container>
  )
}

export default SocialIcons
