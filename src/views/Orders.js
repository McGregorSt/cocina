import React from 'react'
import OrderCard from '../components/organisms/OrderCard'
import UserPage from '../template/UserPage'
import { useSelector } from 'react-redux'

const Orders = () => {
  const activeOrders = useSelector((state) => state.newOrderState.orders)
  // let activeOrders = orders.filter((order) => order.status !== 'Delivered')

  console.log('activeOrders', activeOrders)
  return (
    <UserPage>
      {activeOrders.map(
        (
          { status, complete, number, orderItems, prepDetails, profiles, startDate, endDate },
          index
        ) => (
          <OrderCard
            key={Math.random()}
            status={status}
            complete={complete}
            orderNumber={number}
            orderIndex={index}
            orderItems={orderItems}
            prepDetails={prepDetails}
            profiles={profiles}
            startDate={startDate}
            endDate={endDate}
          />
        )
      )}
    </UserPage>
  )
}

export default Orders
