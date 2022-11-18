import React from 'react';
import styled from 'styled-components'

const ProductName = styled.div`
  min-width: 70%;
  /* height: 90px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.twitters};
`

export default ProductName
