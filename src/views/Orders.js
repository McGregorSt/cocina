import React from 'react'
import OrderCard from '../components/organisms/OrderCard'
import UserPage from '../template/UserPage'
import { useSelector } from 'react-redux'

const Orders = () => {
  const orders = useSelector((state) => state.newOrderState.orders)
  let activeOrders = orders.filter(order => order.status !== 'Delivered')

  return (
    <UserPage>
      {activeOrders.map(
        ({ status, complete, number, orderItems, prepDetails, profiles }, index) =>
          // return status === 'Delivered' ? (
          //   ''
          // ) : (
            <OrderCard
              key={Math.random()}
              status={status}
              complete={complete}
              orderNo={number}
              orderIndex={index}
              orderItems={orderItems}
              prepDetails={prepDetails}
              profiles={profiles}
            />
          // )
        
      )}
    </UserPage>
  )
}

export default Orders
