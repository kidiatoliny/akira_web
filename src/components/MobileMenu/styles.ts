import styled from 'styled-components'

export const Menu = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    border: none;
    background: none;
    position: absolute;
    left: 2rem;
  }
`
