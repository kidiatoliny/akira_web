import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Icon = styled.span`
  margin: 10px;
  color: ${props => props.theme.colors.primary};
`
