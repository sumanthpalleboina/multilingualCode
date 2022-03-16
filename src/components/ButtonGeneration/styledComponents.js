import styled from 'styled-components/macro'

export const ItemButton = styled.li`
  list-style-type: none;
  text-decoration: none;
`
export const ButtonLag = styled.button`
  width: 100px;
  height: 37px;
  background: ${props => (props.active ? '#db1c48' : 'transparent')};
  color: ${props => (props.active ? '#ffffff' : ' #db1c48')};
  border: 1px solid #db1c48;
  border-radius: 19px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  margin-right: 15px;
`
