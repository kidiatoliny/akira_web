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
  margin-right: 30rem;
  padding: 3rem;

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    margin-right: 0;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 1rem;
  }
`
