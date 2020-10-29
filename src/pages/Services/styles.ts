import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 992px) {
    aside {
      display: none;
    }
  }
`

export const ServicesWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10rem 0 0 40rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 12rem auto;
    flex-direction: column;
  }
  @media (min-width: 1300px) {
    margin-top: auto 1rem;
  }
`
