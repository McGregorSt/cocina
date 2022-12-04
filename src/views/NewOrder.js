import React from 'react'
import styled from 'styled-components'
import UserPage from '../template/UserPage'
import SelectableGroups from '../components/molecules/SelectableGroups'
import SelectableProducts from '../components/molecules/SelectableProducts'
import OrderSummary from '../components/organisms/OrderSummary'

const StyledNewOrder = styled.div`
  /* height: 100%;
  width: 100%; */
  /* display: grid;
  grid-template-columns: 4fr 1fr; */
  /* overflow-x: hidden; */
  /* position: relative; */
  z-index: 2;
  /* &:nth-child(2n + 2) {
    position: fixed;
    top: 150px;
  } */
`

const StyledProductsSelection = styled.div`
  /* height: 100%; */
  width: 80%;
  /* display: flex; */
  flex-direction: column;
  
  /* overflow-x: hidden; */
`

const StyledOrderSummaryWrapper = styled.div`
  /* width: 30%; */
  position: absolute;
  right: 0;
  top: 50px;
`

const NewOrder = () => {
  return (
    <UserPage>
      <StyledNewOrder>
        <StyledProductsSelection>
          <SelectableGroups />
          <SelectableProducts />
        </StyledProductsSelection>
        <StyledOrderSummaryWrapper>
          <OrderSummary />
        </StyledOrderSummaryWrapper>
      </StyledNewOrder>
    </UserPage>
  )
}

export default NewOrder
