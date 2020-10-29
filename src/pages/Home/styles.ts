import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
  width: 100%;
  @media (min-width: 768px) {
    position: relative;
  }
`
export const MainContent = styled.div`
  width: 100%;
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

  /**SM devices*/
  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 5rem;
    padding-top: 5rem;
  }
  /*MD devices*/
  @media only screen and (min-width: 992px) {
    width: 100%;
    margin: 15rem 0 0 10rem;
    padding-top: 5rem;
  }
  /**XL devices*/
  @media only screen and (min-width: 1300px) {
    width: 40%;
    margin: 1rem;
    padding-top: 1rem;
  }
`
export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-weight: 900;
  text-transform: uppercase;
  font-style: normal;
  color: ${props => props.theme.colors.primary};

  /**XS devices*/
  @media (max-width: 600px) {
    font-size: 4.8rem;
    line-height: 5.8rem;
  }
  /**SM devices */
  @media (min-width: 600px) {
    font-size: 5rem;
    line-height: 6rem;
    margin-top: 5rem;
  }
  /**MD devices */
  @media (min-width: 992px) {
    font-size: 5rem;
    line-height: 6rem;
    margin-top: 5rem;
  }
`
export const SubTitle = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 600;
  color: ${props => props.theme.colors.body};

  margin-top: 3rem;
  /**mobile */
  @media (max-width: 600px) {
    font-size: 1.6rem !important;
    line-height: 3rem;
  }
  /**tablets */
  @media (max-width: 968px) {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media (min-width: 992px) {
    font-size: 2rem;
    line-height: 3rem;
    width: 70%;
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
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 30rem;
    height: auto;
    margin-right: 3rem;
  }
`

export const SocialIconsWrapper = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
