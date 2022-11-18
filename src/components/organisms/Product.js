import React, { useState } from 'react'
import styled from 'styled-components'
import MainTemplate from '../../template/MainTemplate'
import ProductFooter from '../molecules/ProductFooter'
import ProductEdits from '../molecules/ProductEdits'
import ProductState from '../molecules/ProductState'
import { useSelector } from 'react-redux'

const StyledProduct = styled.div`
  width: 300px;
  height: 33vh;
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
`


const Product = ({ id, name, inState, toPrepare }) => {
  const [currentQty, setCurrentQty] = useState(0)
  return (
    <MainTemplate>
      <StyledProduct>
        <ProductFooter name={name} id={id} currentQuantity={currentQty} setCurrentQty={(value) => setCurrentQty(value)}/>
        <ProductState inState={inState} toPrepare={toPrepare}/>
        <ProductEdits id={id} currentQuantity={currentQty} setCurrentQty={(value) => setCurrentQty(value)}/>
      </StyledProduct>
    </MainTemplate>
  )
}

export default Product
