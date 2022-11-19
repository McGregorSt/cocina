import React, { useState } from 'react'
import EditButton from '../atoms/EditButton'
import styled from 'styled-components'
import check from '../../assets/check-round.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToState, changeStatus } from '../../_actions/productActions'
import Heading from '../atoms/Heading'
import PieChart from './PieChart'

const StyledHeader = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledPieChart = styled.div`
  display: flex;
  justify-content: center;
`

const ProductQuantity = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const dispatch = useDispatch()
  const productId = useSelector(
    (state) => state.productState.productToDisplayOnRightSidebar.id
  )
  const handleAddProductState = (id, value) => {
    dispatch(addProductToState(id, value))
    dispatch(changeStatus(id))
  }

  return (
    <div>
      <StyledHeader>
        <Heading>dodaj produkt</Heading>
        <EditButton
          icon={check}
          medium
          color='hsl(49, 100%, 58%, 80%)'
          size='60%'
          boxShadow
          radius='10px'
          onClick={() => handleAddProductState(productId, currentValue)}
        />
      </StyledHeader>
      <StyledPieChart>
        <PieChart
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      </StyledPieChart>
    </div>
  )
}

export default ProductQuantity
