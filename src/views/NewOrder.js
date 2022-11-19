import React from 'react'
import styled from 'styled-components'
import UserPage from '../template/UserPage'
import SelectableGroups from '../components/molecules/SelectableGroups'
import SelectableProducts from '../components/molecules/SelectableProducts'
import OrderSummary from '../components/organisms/OrderSummary'

const StyledNewOrder = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  &:nth-child(2n + 2) {
    position: fixed;
    top: 250px;
  }
`

const StyledProductsSelection = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`

const NewOrder = () => {
  return (
    <UserPage>
      <StyledNewOrder>
        <StyledProductsSelection>
          <SelectableGroups />
          <SelectableProducts />
        </StyledProductsSelection>
        <OrderSummary />
      </StyledNewOrder>
    </UserPage>
  )
}

export default NewOrder
