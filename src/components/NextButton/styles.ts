import styled from 'styled-components'

export const NextButton = styled.div`
  a {
    position: fixed;
    width: 8rem;
    height: 8rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: flex;
    transition: background-color 0.3s;
    bottom: 4rem;
    right: 4rem;
    svg {
      width: 2.4rem;
      height: auto;
    }
    &:hover {
      background: ${props => props.theme.colors.hoverColor};
    }
    @media (max-width: 600px) {
      position: fixed;
      width: 5rem;
      height: 5rem;
      border-radius: 1rem;
    }
  }
`
