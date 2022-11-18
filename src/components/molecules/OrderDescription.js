import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.ul`
  text-transform: uppercase;
  list-style: none;
  margin: 14px 0;
  font-size: 13px;
  margin-left: 20px;
`

const OrderDescription = ({ details }) => {
  return (
    <StyledDescription>
      {details.map(({ ingr, quantity }) => (
        <li key={Math.random()}>
          {quantity}x {ingr}
        </li>
      ))}
    </StyledDescription>
  )
}

export default OrderDescription
