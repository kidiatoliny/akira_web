import React from 'react'

import { Menu } from './styles'

interface Props {
  onClick: () => void
}
const MobileMenu: React.FC<Props> = ({ children, onClick, ...restProps }) => {
  return (
    <Menu onClick={onClick} {...restProps}>
      {children}
    </Menu>
  )
}

export default MobileMenu
