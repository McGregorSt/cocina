import produce, { original } from 'immer'
import {orders} from '../data/ordersJson'
import {newOrder} from '../data/newOrderJson'

const initialState = newOrder

const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ITEM_READY': {
      return produce(state, draft => {
        const data = original(draft.orders)
        console.log('ITEM_READY', state)
        const orderIndex = state.orders.findIndex(order => console.log(order))
        // const orderIndex = data.findIndex(order => order.number === action.orderNo)
        const itemIndex = data[orderIndex].orderItems.findIndex(item => item.index === action.orderItemId)
        draft[orderIndex].orderItems[itemIndex].complete = !draft[orderIndex].orderItems[itemIndex].complete
      })
    }
    case 'ALL_ITEMS_READY': {
      return produce(state, draft => {
        const data = original(draft)
        const orderIndex = data.findIndex(order => order.number === action.orderNumber)
        const itemsCounter = data[orderIndex].orderItems.length
        let itemsCompletedCounter = 0
        data[orderIndex].orderItems.map(item => {
          if (item.complete) {
            itemsCompletedCounter += 1
          }
          return itemsCompletedCounter
        })
        if (itemsCounter === itemsCompletedCounter) {
          draft[orderIndex].complete = true
        } else {
          draft[orderIndex].complete = false
        }
      })
    }
    case 'ORDER_STATUS': {
      return produce(state, draft => {
        const data = original(draft)
        const orderIndex = data.findIndex(order => order.number === action.orderNumber)
        const itemsCounter = data[orderIndex].orderItems.length
        let itemsCompletedCounter = 0
        data[orderIndex].orderItems.map(item => {
          if (item.complete) {
            itemsCompletedCounter += 1
          }
          return itemsCompletedCounter
        })
        if (itemsCompletedCounter === 0) {
          draft[orderIndex].status = 'notReady'
          draft[orderIndex].profiles[0].active = false
          draft[orderIndex].profiles[1].active = false
        } 
        if (itemsCompletedCounter > 0 && itemsCompletedCounter < itemsCounter) {
          draft[orderIndex].status = 'almostReady'
        } 
        if (itemsCompletedCounter === itemsCounter) {
          draft[orderIndex].status = 'ready'
        } 
      })
    }
    case 'PROFILE_SELECTED': {
      return produce(state, draft => {
        const data = original(draft)
        const orderIndex = data.findIndex(order => order.number === action.orderNumber)
        const profileName = data[orderIndex].profiles.map(profile => profile.name)
        const profileActive = data[orderIndex].profiles.map(profile => profile.active)
        if (profileName[0] === action.profile.name) {
          draft[orderIndex].profiles[0].active = !draft[orderIndex].profiles[0].active
          draft[orderIndex].profiles[1].active = false
          if (data[orderIndex].status === 'notReady') {
            draft[orderIndex].status = 'almostReady'
          }
        }
        if (profileName[1] === action.profile.name) {
          draft[orderIndex].profiles[1].active = !draft[orderIndex].profiles[1].active
          draft[orderIndex].profiles[0].active = false
          if (data[orderIndex].status === 'notReady') {
            draft[orderIndex].status = 'almostReady'
          }
        }
        if (!profileActive) {
          draft[orderIndex].status = 'notReady'
        } 
      })
    }
    case 'ORDER_READY_TO_GO': {
      return produce(state, draft => {
        const data = original(draft)
        const orderIndex = data.findIndex(order => order.number === action.orderNumber)
        draft[orderIndex].status = 'readyToGo'
      })
    }
    case 'ORDER_DELIVERED': {
      return produce(state, draft => {
        const data = original(draft)
        const orderIndex = data.findIndex(order => order.number === action.orderNumber)
        const orderComplete = data[orderIndex].complete
        if (orderComplete) {
          draft.splice(orderIndex, 1)
        }
      })
    }
    default:
      return state
  }
}

export default ordersReducer