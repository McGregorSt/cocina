import React, { useState } from 'react'
import EditButton from '../atoms/EditButton'
import styled from 'styled-components'
import check from '../../assets/check-round.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductToState,
  changeStatus,
} from '../../_actions/productActions'
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
    (state) => state.productReducer.productToDisplayOnRightSidebar.id
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

{
  /* <StyledProductQuantity>
  <ButtonsWrapper style={{ position: 'relative' }}>
    <StyledEditButton
      large
      boxShadow
      radius='50%'
      disabled={currentValue < 5}
      onClick={() => setCurrentValue(currentValue - unitMultiplier * 5)}
      style={{ position: 'relative', left: '30px' }}
    >
      -5
    </StyledEditButton>
    <StyledEditButton
      large
      boxShadow
      radius='50%'
      disabled={currentValue < 2}
      onClick={() => setCurrentValue(currentValue - unitMultiplier * 2)}
      style={{ left: '-20px' }}
    >
      -2
    </StyledEditButton>
    <StyledEditButton
      large
      boxShadow
      radius='50%'
      disabled={currentValue < 1}
      onClick={() => setCurrentValue(currentValue - unitMultiplier * 1)}
      style={{ position: 'relative', left: '30px' }}
    >
      -1
    </StyledEditButton>
  </ButtonsWrapper>
  <ButtonsWrapper>
    <StyledEditButton
      large
      boxShadow
      radius='10%'
      style={{
        fontSize: '42px',
        fontWeight: '700',
        background: 'whitesmoke',
        position: 'relative',
      }}
      onChange={(e) => setCurrentValue(e.target.value)}
    >
      {currentValue}
    </StyledEditButton>
  </ButtonsWrapper>
  <ButtonsWrapper>
    <StyledEditButton
      add
      large
      boxShadow
      radius='50%'
      onClick={() => setCurrentValue(currentValue + unitMultiplier * 1)}
      style={{ position: 'relative', left: '-30px' }}
    >
      +1
    </StyledEditButton>
    <StyledEditButton
      add
      large
      boxShadow
      radius='50%'
      onClick={() => setCurrentValue(currentValue + unitMultiplier * 2)}
    >
      +2
    </StyledEditButton>
    <StyledEditButton
      add
      large
      boxShadow
      radius='50%'
      onClick={() => setCurrentValue(currentValue + unitMultiplier * 5)}
      style={{ position: 'relative', left: '-30px' }}
    >
      +5
    </StyledEditButton>
  </ButtonsWrapper>
</StyledProductQuantity> */
}
