import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { theme } from '../../theme/Theme'
import NewOrderSummaryFooter from '../molecules/NewOrderSummaryFooter'
import NewOrderSummaryItem from '../molecules/NewOrderSummaryItem'

const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  width: 450px;
  position: relative;
  background-color: ${({ theme }) => theme.gold};
  border-top: 3px solid ${theme.grey800};
  border-left: 20px solid ${theme.grey800};
  border-bottom: 3px solid ${theme.grey800};
  border-radius: 20px 0 0 20px;
  color: ${theme.grey800};
  padding: 0 10px 20px 10px;
  & * > p {
    font-size: 1.1rem;
    font-weight: 600;
  }
  ${({ active }) =>
    active &&
    css`
      transition: 0.5s;
    `}
`

const OrderSummary = () => {
  const newOrderSummary = useSelector(
    (state) => state.newOrderState.newOrderSummary
  )

  return (
    <StyledOrderSummary active={true}>
      <div>
        <p>Twoje zamówienie:</p>
        {newOrderSummary.map(
          ({ index, itemName, price, size, unit, quantity, ingredients }) => (
            <NewOrderSummaryItem
              key={Math.random()}
              name={itemName}
              index={index}
              price={price}
              size={size}
              unit={unit}
              quantity={quantity}
              ingredients={ingredients}
            />
          )
        )}
      </div>
      <NewOrderSummaryFooter />
    </StyledOrderSummary>
  )
}

export default OrderSummary
