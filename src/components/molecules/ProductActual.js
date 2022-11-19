import React from 'react'
import styled from 'styled-components'
import ProductActualTable from './ProductActualTable'
import ProductState from './ProductState'

const StyledProductActual = styled.div`
  width: 95%;
  & > :first-child {
    padding-bottom: 15px;
  }
`

const StyledProductState = styled(ProductState)`
  background-color: black;
`

const ProductActual = ({ inState, toPrepare }) => {
  return (
    <StyledProductActual>
      <StyledProductState inState={inState} toPrepare={toPrepare} />
      <ProductActualTable />
    </StyledProductActual>
  )
}

export default ProductActual
