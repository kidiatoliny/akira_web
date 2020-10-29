import { invert } from 'polished'
import styled from 'styled-components'

export const Container = styled.aside`
  height: 100vh;
  width: 40rem;
  background: ${props => props.theme.colors.accent};
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const title = styled.h1`
  color: ${props => props.theme.colors.primary};
`
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;

  div {
    margin-bottom: 2rem;
  }
`

export const MainContent = styled.div`
  height: 70%;
  position: relative;
  overflow: auto;
  p {
    margin-top: 5rem;
    color: ${props => props.theme.colors.body};
    font-style: normal;

    font-size: 1.8rem;
    line-height: 2.8rem;
    position: relative;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 6rem;
    height: auto;
  }

  h1 {
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-size: 4rem;
    text-transform: uppercase;
  }
`
