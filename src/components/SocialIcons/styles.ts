import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  svg {
    width: 40px;
    height: auto;
    margin-right: 10px;
    cursor: pointer;
    transition: transform ease-in 0.3s;
    &:hover {
      filter: invert(30%);
      transform: scale(1.2);
      span {
        display: none;
      }
    }
  }
`
export const ToolTip = styled.span``
