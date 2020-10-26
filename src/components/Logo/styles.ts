import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.body};
  font-weight: 900;
  font-size: 2.6rem;
  margin-left: 28rem;
  text-transform: uppercase;
  span {
    text-transform: lowercase;
    font-weight: 300;
    margin-left: 0.3rem;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    margin-left: 8rem;
  }
`
export const Img = styled.img`
  width: 3.5rem;
  height: auto;
  margin-right: 1rem;
  margin-left: 1rem;
  filter: ${props => (props.theme.type === 'dark' ? '' : 'invert()')};
`
