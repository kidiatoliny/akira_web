import React, { useCallback, useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'

import MenuItem from '../MenuItem'
import MobileMenu from '../MobileMenu'
import { Container } from './styles'

const Menu: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  const handleToggleMenu = useCallback(() => {
    alert('Open Menu')
  }, [])
  return (
    <Container>
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/services">Serviços</MenuItem>
      <MenuItem link="/clients">Clientes</MenuItem>
      <MenuItem link="/portfolio">Portfolio</MenuItem>
      <MenuItem link="/contact">Contato</MenuItem>
      <MobileMenu onClick={handleToggleMenu}>
        <FiMenu size={32} color={colors.primary} />
      </MobileMenu>
    </Container>
  )
}

export default Menu
