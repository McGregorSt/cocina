import React from 'react'
import styled, { css } from 'styled-components'
import MainTemplate from '../../template/MainTemplate'
import OrderHeading from '../molecules/OrderHeading'
import Button from '../atoms/Button'
import OrderItem from '../molecules/OrderItem'
import { orderDelivered, orderReadyToGo } from '../../_actions/actions'
import { useDispatch } from 'react-redux'
import { descentOfIngredients } from '../../_actions/productActions'

const StyledOrderCard = styled.div`
  width: 280px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.grey100};
  box-shadow: ${({ readyToGo, theme }) =>
        readyToGo === 'readyToGo' ? theme.black : theme.grey800a}
      0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 25px 0 0 25px;
  position: relative;
`
const StyledPreparationTime = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 20px;

  ${({ isItemReady }) =>
    isItemReady &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
    `}

  & :first-child() {
    background-color: ${({ theme }) => theme.grey400};
  }
  & :last-child() {
    background-color: ${({ theme }) => theme.grey800};
  }
`

const StyledOrderItem = styled(OrderItem)`
  ${({ isItemReady }) =>
    isItemReady &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
    `}
`

const OrderCard = ({
  status,
  complete,
  orderNumber,
  orderItems,
  profiles,
  orderIndex,
  startDate,
  endDate,
}) => {
  let timeDelta
  const preparationTime = (startDate, endDate) => { 
    timeDelta = (Date.parse(endDate) - Date.parse(startDate)) / 1000
    if (timeDelta >= 60) {
      return `${parseInt(timeDelta/60)}m ${timeDelta%60}s`
    } else {
      return `${timeDelta%60}s`
    }
  }
  const dispatch = useDispatch()
  const handleOrderDelivery = (orderNumber) => {
    dispatch(descentOfIngredients(orderNumber))
    dispatch(orderDelivered(orderNumber))
  }
  return (
    <MainTemplate>
      <StyledOrderCard readyToGo={status}>
        <OrderHeading
          status={status}
          orderNumber={orderNumber}
          profiles={profiles}
        />
        <StyledContent>
          {orderItems.map(
            ({
              quantity,
              item,
              complete,
              details,
              prepDetails,
              index,
              size,
              unit,
            }) => (
              <StyledOrderItem
                key={Math.random()}
                quantity={quantity}
                item={item}
                complete={complete}
                details={details}
                prepDetails={prepDetails}
                orderNumber={orderNumber}
                index={index}
                size={size}
                unit={unit}
              />
            )
          )}
          {status === 'delivered' ? (
            <StyledPreparationTime>
              Order was prepared in: {preparationTime(startDate, endDate)}

            </StyledPreparationTime>
          ) : (
            <Button
              status={complete}
              onClick={() =>
                status === 'readyToGo'
                  ? handleOrderDelivery(orderNumber, orderIndex)
                  : dispatch(orderReadyToGo(orderNumber))
              }
            >
              {status === 'readyToGo' ? 'delivered' : 'ready'}
            </Button>
          )}
        </StyledContent>
      </StyledOrderCard>
    </MainTemplate>
  )
}

export default OrderCard
