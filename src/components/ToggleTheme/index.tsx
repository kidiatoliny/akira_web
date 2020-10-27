import { shade } from 'polished'
import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container, Icon } from './styles'

interface Props {
  onChange: () => void
}
const ToggleTheme: React.FC<Props> = ({ onChange }) => {
  const { colors, type } = useContext(ThemeContext)
  return (
    <Container>
      <Icon> ☀ </Icon>
      <Switch
        onChange={onChange}
        checked={type === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.5, colors.primary)}
        offColor={shade(0.5, colors.primary)}
        offHandleColor={colors.primary}
      />
      <Icon> ☾ </Icon>
    </Container>
  )
}

export default ToggleTheme
