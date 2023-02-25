import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { postNewOrder } from '../../_actions/newOrderActions'
import EditButton from '../atoms/EditButton'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: right;
`

const StyledEditButton = styled(EditButton)`
  width: 200px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  font-size: 20px;
  letter-spacing: 1.3px;
  margin: 10px 0;
  align-self: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const StyledSummary = styled.div`
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`

const NewOrderSummaryFooter = () => {
  const orderDetails = useSelector((state) => state.newOrderState.newOrderSummary)
  const totalPrice = useSelector((state) => state.newOrderState.totalPrice)
  const dispatch = useDispatch()

  const handlePostNewOrder = (orderDetails) => {
    dispatch(postNewOrder(orderDetails))
  }

  return (
    <StyledFooter>
      <StyledSummary>
        Total:
        <div>{totalPrice.toFixed(2)} PLN</div>
      </StyledSummary>
      <StyledEditButton onClick={() => handlePostNewOrder(orderDetails)}>
        Order
      </StyledEditButton>
    </StyledFooter>
  )
}

export default NewOrderSummaryFooter
