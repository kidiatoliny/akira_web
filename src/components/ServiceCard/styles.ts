import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.1rem;
  min-width: 28.1rem;
  height: 27.2rem;
  min-height: 27.2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: ${props => props.theme.colors.accent};
  margin: 2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: transform ease 1s;
  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
  }
  @media (min-width: 1300px) {
    width: 33.333%;
    height: 33.333%;
  }
`
export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin: 2rem auto;
  color: ${props => props.theme.colors.primary};
`
