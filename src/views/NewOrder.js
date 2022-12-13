import React from 'react'
import styled from 'styled-components'
import UserPage from '../template/UserPage'
import SelectableGroups from '../components/molecules/SelectableGroups'
import SelectableProducts from '../components/molecules/SelectableProducts'
import OrderSummary from '../components/organisms/OrderSummary'

const StyledNewOrder = styled.div``

const StyledProductsSelection = styled.div`
  width: 67vw;
`

const StyledOrderSummaryWrapper = styled.div`
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
