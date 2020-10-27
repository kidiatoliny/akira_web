import React, { useContext } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import { NextButton } from './styles'

interface Props {
  link: string
}
const Button: React.FC<Props> = ({ link }) => {
  const { colors, type } = useContext(ThemeContext)
  return (
    <NextButton>
      <Link to={link}>
        <FiArrowRight
          size={10}
          color={type === 'dark' ? colors.secondary : '#fff'}
        />
      </Link>
    </NextButton>
  )
}

export default Button
