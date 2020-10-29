import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 1.9rem;
  right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  @media (max-width: 768px) {
    display: block;
  }
`
export const Icon = styled.span`
  margin: 10px;
  color: ${props => props.theme.colors.primary};
`
