import React from 'react'

import { Container, Title } from './styles'

interface Props {
  title: string
}
const ServiceCard: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      {children}
      <Title>{title}</Title>
    </Container>
  )
}

export default ServiceCard
