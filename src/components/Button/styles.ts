import styled from 'styled-components'

export const NextButton = styled.div`
  a {
    width: 80px;
    height: 80px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
    display: flex;
    transition: background-color 0.3s;
    svg {
      width: 24px;
      height: auto;
    }
    &:hover {
      background: ${props => props.theme.colors.hoverColor};
      svg {
        filter: invert();
      }
    }
  }
`
