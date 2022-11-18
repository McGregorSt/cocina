import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 50%;
  background-color: ${({ status, theme }) => status ? theme.readyToGo : theme.grey400};
  color: ${({ status, theme }) => status ? theme.white : theme.grey300};
  padding: 10px;
  border-radius: 20px;
  border: none;
  margin-top: 10px;
  align-self: center;
  margin-top: 20px;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;

  ${({ addButton }) => 
    addButton && css`
      background-color: ${({ theme }) => theme.cultured};
    `
  } 
  ${({ editButton }) => 
    editButton && css`
      background-color: ${({ theme }) => theme.ready};
    `
  } 
`

export default Button