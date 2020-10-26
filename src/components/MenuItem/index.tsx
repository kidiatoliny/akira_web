import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Item } from './styles'

export interface Props {
  link: string
}
const MenuItem: React.FC<Props> = ({ children, link }) => {
  const location = useLocation()

  return (
    <Link to={link}>
      <Item active={location.pathname === link}>{children}</Item>
    </Link>
  )
}

export default MenuItem
