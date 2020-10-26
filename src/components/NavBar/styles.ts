import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 9rem;
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
    align-items: center;
    float: left;
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-right: 20rem;
  padding: 3rem;
`
