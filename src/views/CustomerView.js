import React from 'react'
import UserPage from '../template/UserPage'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import OrderNumber from '../components/molecules/OrderNumber'

const StyledWrapper = styled.div`
  display: flex;
`

const StyledHeader = styled.div`
  height: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: ${({ theme }) => theme.grey800};
  font-weight: 400;
  box-shadow: ${({ readyToGo, theme }) =>
        readyToGo === 'readyToGo' ? theme.black : theme.grey800a}
      0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const StyledReadyToGoOrders = styled.div`
  width: 49.8vw;
  height: 100vh;
`

const StyledInPrearationOrders = styled.div`
  width: 49.8vw;
  height: 100vh;
`

const StyledDistance = styled.div`
  width: 0.1vw;
  border-right: 3px solid ${({ theme }) => theme.grey600};
  border-left: 3px solid ${({ theme }) => theme.grey600};
`

const CustomerView = () => {
  const orders = useSelector((state) => state.newOrderState.orders)
  const readyToGoOrders = orders.filter((order) => order.status === 'readyToGo')
  const inPreparationOrders = orders.filter(
    (order) =>
      order.status === 'notReady' ||
      order.status === 'almostReady' ||
      order.status === 'ready'
  )

  return (
    <UserPage>
      <StyledWrapper>
        <StyledReadyToGoOrders>
          <StyledHeader>
            <p>In preparation</p>
          </StyledHeader>
          {inPreparationOrders.map(
            (
              {
                status,
                complete,
                number,
                profiles,
                // orderItems,
                // prepDetails,
                // startDate,
                // endDate,
              },
              index
            ) => (
              <OrderNumber
                key={Math.random()}
                status={status}
                complete={complete}
                orderNumber={number}
                orderIndex={index}
                profiles={profiles}
                // orderItems={orderItems}
                // prepDetails={prepDetails}
                // startDate={startDate}
                // endDate={endDate}
              />
            )
          )}
        </StyledReadyToGoOrders>
        <StyledDistance />
        <StyledInPrearationOrders>
          <StyledHeader>
            <p>Ready to go</p>
          </StyledHeader>
          {readyToGoOrders.map(
            (
              {
                status,
                complete,
                number,
                profiles,
                // orderItems,
                // prepDetails,
                // startDate,
                // endDate,
              },
              index
            ) => (
              <OrderNumber
                key={Math.random()}
                status={status}
                complete={complete}
                orderNumber={number}
                orderIndex={index}
                profiles={profiles}
                // orderItems={orderItems}
                // prepDetails={prepDetails}
                // startDate={startDate}
                // endDate={endDate}
              />
            )
          )}
        </StyledInPrearationOrders>
      </StyledWrapper>
    </UserPage>
  )
}

export default CustomerView
