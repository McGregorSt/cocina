import React from 'react';
import styled from 'styled-components'
import ProductActualTable from './ProductActualTable';
import ProductState from './ProductState';

const StyledProductActual = styled.div`
  width: 95%;
  & > :first-child {
    padding-bottom: 15px;
  }
`

const StyledProductState = styled(ProductState)`
  /* width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr; */
  background-color: black;
`

const ProductActual = ({ inState, toPrepare }) => {
  return (
    <StyledProductActual>
      <StyledProductState inState={inState} toPrepare={toPrepare} />
      <ProductActualTable />
    </StyledProductActual>
  );
}

export default ProductActual;
