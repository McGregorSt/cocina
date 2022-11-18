import React from 'react'
import styled, { keyframes } from 'styled-components'

const ItemQuantity = ({ quantity }) => {
  const scaleDown = keyframes`
    from {
      font-size: 25px;
    } 
    to {
      font-size: 20px;
    }
  `

  const StyledQuantity = styled.div`
    animation: ${scaleDown} 0.4s linear;
    z-index: 2;
  `

  return (
    <StyledQuantity>
        {quantity}x
    </StyledQuantity>
  )
}

export default ItemQuantity
