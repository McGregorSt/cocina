import styled from 'styled-components'

const Input = styled.input`
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.btn};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 5px;
  

`

export default Input