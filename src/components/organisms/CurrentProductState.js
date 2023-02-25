import React from 'react'
import Heading from '../atoms/Heading'
import ProductActual from '../molecules/ProductActual'
import styled from 'styled-components'

const StyledActualState = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`

const CurrentProductState = ({ inState, toPrepare }) => {
  return (
    <div>
      <Heading>current product state:</Heading>
      <StyledActualState>
        <ProductActual inState={inState} toPrepare={toPrepare} />
      </StyledActualState>
    </div>
  )
}

export default CurrentProductState
