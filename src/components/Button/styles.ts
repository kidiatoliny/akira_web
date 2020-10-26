import styled from 'styled-components'

export const NextButton = styled.div`
  a {
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
    svg {
      width: 2.4rem;
      height: auto;
    }
    &:hover {
      background: ${props => props.theme.colors.hoverColor};
      svg {
        filter: invert();
      }
    }
    @media (max-width: 600px) {
      width: 5rem;
      height: 5rem;
      border-radius: 1rem;
    }
  }
`
