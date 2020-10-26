import styled from 'styled-components'
interface Props {
  active: boolean
}

export const Item = styled.div<Props>`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
  font-weight: bold;
  transition: color ease-in 0.4s;
  &:hover {
    color: ${props => props.theme.colors.hoverColor};
  }

  ::before {
    width: 15px;
    height: 15px;
    background: ${props => props.theme.colors.primary};
    content: '';
    border-radius: 50%;
    margin-right: 4px;
    display: ${props => (props.active ? 'inline' : 'none')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`
