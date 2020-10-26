import styled from 'styled-components'

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    width: 100%;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 5rem;
    padding-top: 5rem;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
    margin: 5rem;
    padding-top: 5rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 50%;
    margin: 1rem;
    padding-top: 1rem;
  }
`
export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-weight: 900;
  font-size: 7.6rem;
  text-transform: uppercase;
  line-height: 8rem;
  font-style: normal;
  color: ${props => props.theme.colors.primary};

  /**mobile */
  @media only screen and (max-width: 600px) {
    font-size: 4.8rem;
    line-height: 5.8rem;
  }
  /**tablets */
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
    margin-top: 5rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 9.6rem;
    line-height: 11.6rem;
    width: 80%;
  }
`
export const SubTitle = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.4rem;
  color: ${props => props.theme.colors.body};

  margin-top: 3rem;
  /**mobile */
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 3rem;
  }
  /**tablets */
  @media only screen and (max-width: 968px) {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2.8rem;
    line-height: 3.8rem;
    width: 90%;
  }
`
export const Logo = styled.img`
  width: 30rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    width: 15rem;
    height: auto;
    margin: 0 0 5rem 0;
  }
  @media only screen and (min-width: 768px) {
    width: 20rem;
    height: auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 30rem;
    height: auto;
    margin-right: 3rem;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    margin-right: 4rem;
    margin-top: 4rem;
    a {
      margin-bottom: 6rem;
    }
  }

  /*small*/
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  /*medium*/
  @media only screen and (min-width: 768px) {
  }
  /*large*/
  @media only screen and (min-width: 992px) {
  }
  /**extra large */
  @media only screen and (min-width: 1200px) {
  }
`
