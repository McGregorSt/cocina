import React from 'react'
import styled, { css } from 'styled-components'
import Checkbox from '../atoms/Checkbox'
import dropdown from '../../assets/dropdown.png'
import OrderDescription from './OrderDescription'
import { useDispatch } from 'react-redux'
import {
  allItemsReady,
  itemComplete,
  orderStatus,
} from '../../_actions/actions'

const StyledItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.grey300};
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.grey200};
  }

  ${({ complete }) =>
    complete &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
      :nth-child(odd) {
        background-color: ${({ theme }) => theme.itemReady};
      }
    `}
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.25fr 1.5fr 0.4fr;
  cursor: pointer;
  padding: 10px;
`

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ isItemReady }) =>
    isItemReady &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
    `}

  & .prepDetails {
    font-size: 12px;
    text-transform: uppercase;
    margin: 0 30px;
    padding: 10px 0;
    border-top: 1px solid black;
  }
`

const StyledDropdown = styled.div`
  background-image: url(${dropdown});
  background-position: 50% 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  transform: rotate(180deg);
`

const OrderItem = ({
  quantity,
  item,
  details,
  prepDetails,
  index,
  complete,
  orderNumber,
  size,
  unit,
}) => {
  const dispatch = useDispatch()

  const handleItemComplete = (orderNumber, index) => {
    dispatch(itemComplete(orderNumber, index))
    dispatch(allItemsReady(orderNumber))
    dispatch(orderStatus(orderNumber))
  }

  return (
    <StyledItem onClick={() => handleItemComplete(orderNumber, index)}>
      <StyledGrid>
        <Checkbox selected={complete} />
        <span>{quantity}x</span>
        <span>{`${item}`}</span>
        <span>{`${size}${unit}`}</span>
      </StyledGrid>
      <StyledDetails>
        {details ? <StyledDropdown /> : ''}
        {details ? <OrderDescription details={details} /> : ''}
        {prepDetails ? <p className='prepDetails'>{prepDetails}</p> : ''}
      </StyledDetails>
    </StyledItem>
  )
}

export default OrderItem
