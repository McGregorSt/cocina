import React from 'react'
import styled from 'styled-components'

const StyledOrderNumber = styled.div`
  width: 160px;
  background-color: ${({ theme }) => theme.grey400};
  margin: 40px 60px;
  border-radius: 15px;
  padding: 20px 10px;
  font-family: 'Black Ops One';
  font-size: 32px;
  display: flex;
  justify-content: center;
  box-shadow: ${({ readyToGo, theme }) =>
        readyToGo === 'readyToGo' ? theme.black : theme.grey800a}
      0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const OrderNumber = ({ orderNumber, status }) => {
  return <StyledOrderNumber status={status}>#{orderNumber}</StyledOrderNumber>
}

export default OrderNumber
