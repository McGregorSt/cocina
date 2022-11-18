import React from 'react';
import ProductQuantity from '../molecules/ProductQuantity';
import styled from 'styled-components'


const StyledAddProductToState = styled.div`
  margin: 30px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.opacityBackground};
`

const AddProductToState = () => {
  return (
    <StyledAddProductToState>
        <ProductQuantity />
    </StyledAddProductToState>
  );
}

export default AddProductToState;
