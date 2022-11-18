import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { checkMealAvailability, deleteOrderSummaryItem } from '../../_actions/newOrderActions'
import closeIcon from '../../assets/close.svg'
import EditButton from './EditButton'

const DeleteButton = ({ index, price, ingredients }) => {
  const StyledWrapper = styled.div`
    display: flex;
    justify-content: right;
  `

  const StyledDeleteButton = styled(EditButton)`
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.5);
  `

  const dispatch = useDispatch()

  const handleDeleteOrderSummaryItem = () => {
    dispatch(deleteOrderSummaryItem(index, price))
    dispatch(checkMealAvailability(index, ingredients))
  }

  return (
    <StyledWrapper>
      <StyledDeleteButton
        icon={closeIcon}
        small
        radius='5px'
        onClick={() => handleDeleteOrderSummaryItem()}
      />
    </StyledWrapper>
  )
}

export default DeleteButton
