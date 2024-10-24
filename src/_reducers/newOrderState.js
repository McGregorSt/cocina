import produce from 'immer'
import { newOrder } from '../data/newOrderJson'
import { faker } from '@faker-js/faker'

const initialState = newOrder

const newOrderState = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_READY': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        const itemIndex = state.orders[orderIndex].orderItems.findIndex((item) => item.index === action.index)
        draft.orders[orderIndex].orderItems[itemIndex].complete =
          !draft.orders[orderIndex].orderItems[itemIndex].complete
      })
    }
    case 'ALL_ITEMS_READY': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        const itemsCounter = state.orders[orderIndex].orderItems.length
        let itemsCompletedCounter = 0
        state.orders[orderIndex].orderItems.map((item) => {
          if (item.complete) {
            itemsCompletedCounter += 1
          }
          return itemsCompletedCounter
        })
        if (itemsCounter === itemsCompletedCounter) {
          draft.orders[orderIndex].complete = true
        } else {
          draft.orders[orderIndex].complete = false
        }
      })
    }
    case 'ORDER_STATUS': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        const itemsCounter = state.orders[orderIndex].orderItems.length
        let itemsCompletedCounter = 0
        state.orders[orderIndex].orderItems.map((item) => {
          if (item.complete) {
            itemsCompletedCounter += 1
          }
          return itemsCompletedCounter
        })
        if (itemsCompletedCounter === 0) {
          draft.orders[orderIndex].status = 'notReady'
          draft.orders[orderIndex].profiles[0].active = false
          draft.orders[orderIndex].profiles[1].active = false
        }
        if (itemsCompletedCounter > 0 && itemsCompletedCounter < itemsCounter) {
          draft.orders[orderIndex].status = 'almostReady'
        }
        if (itemsCompletedCounter === itemsCounter) {
          draft.orders[orderIndex].status = 'ready'
        }
      })
    }
    case 'PROFILE_SELECTED': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        const profileName = state.orders[orderIndex].profiles.map((profile) => profile.profileName)
        const profileActive = state.orders[orderIndex].profiles.map((profile) => profile.isActive)
        if (profileName[0] === action.profile.profileName) {
          draft.orders[orderIndex].profiles[0].isActive = !draft.orders[orderIndex].profiles[0].isActive
          draft.orders[orderIndex].profiles[1].isActive = false
          if (state.orders[orderIndex].status === 'notReady') {
            draft.orders[orderIndex].status = 'almostReady'
          }
        }
        if (profileName[1] === action.profile.profileName) {
          draft.orders[orderIndex].profiles[1].isActive = !draft.orders[orderIndex].profiles[1].isActive
          draft.orders[orderIndex].profiles[0].isActive = false
          if (state.orders[orderIndex].status === 'notReady') {
            draft.orders[orderIndex].status = 'almostReady'
          }
        }
        if (!profileActive) {
          draft.orders[orderIndex].status = 'notReady'
        }
      })
    }
    case 'ORDER_READY_TO_GO': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        draft.orders[orderIndex].status = 'readyToGo'
        draft.orders[orderIndex].endDate = new Date(Date.now())
        draft.orders[orderIndex].complete = true
      })
    }
    case 'ORDER_DELIVERED': {
      return produce(state, (draft) => {
        const orderIndex = state.orders.findIndex((order) => order.number === action.orderNumber)
        const orderComplete = state.orders[orderIndex].complete
        draft.orders[orderIndex].status = 'delivered'
        if (orderComplete) {
          draft.closedOrders.push({
            ...state.orders[orderIndex],
            status: 'delivered',
          })
          draft.orders.splice(orderIndex, 1)
        }
      })
    }
    case 'CHOOSE_GROUP': {
      return produce(state, (draft) => {
        const chosenGroup = draft.groups.filter((group) => group.id === action.id)
        draft.chosenGroup = chosenGroup
      })
    }
    case 'NEW_ORDER_VIEW_CLEARANCE': {
      return produce(state, (draft) => {
        if (draft.chosenGroup !== null) {
          draft.chosenGroup = null
          draft.showOrderSummary = false
        }
      })
    }
    case 'SHOW_ORDER_SUMMARY': {
      return produce(state, (draft) => {
        draft.showOrderSummary = true
      })
    }
    case 'CHECK_MEAL_AVAILABILITY': {
      return produce(state, (draft) => {
        const chosenGroup = state.chosenGroup[0].products
        let ingredientsReady = []
        chosenGroup.forEach((meal, mealIndex) => {
          meal.ingredients.forEach((ingr, ingrIndex) => {
            action.productsToManage.forEach((prodToManage) => {
              if (ingr.id === prodToManage.id) {
                if (ingr.quantity <= prodToManage.inState.ready) {
                  ingredientsReady.push(ingr)
                } else {
                  draft.chosenGroup[0].products[mealIndex].readyToPrepare = false
                }
              }
            })
          })
          if (chosenGroup[mealIndex].ingredients.length === ingredientsReady.length) {
            draft.chosenGroup[0].products[mealIndex].readyToPrepare = true
          }
          // else {
          //   draft.chosenGroup[0].products[mealIndex].readyToPrepare = false
          // }
          ingredientsReady = []
        })
      })
    }
    case 'CHOOSE_PRODUCT': {
      return produce(state, (draft) => {
        const chosenProduct = state.chosenGroup[0].products.filter((product) => product.index === action.index)[0]
        draft.chosenProduct = chosenProduct
        draft.totalPrice += chosenProduct.price
        if (draft.newOrderSummary.length > 0) {
          let chosenProductIndex = null
          draft.newOrderSummary.forEach((order, ind) => {
            if (order.index === draft.chosenProduct.index) {
              return (chosenProductIndex = ind)
            }
          })
          if (chosenProductIndex !== null) {
            draft.newOrderSummary[chosenProductIndex].quantity += 1
            chosenProductIndex = null
          } else {
            draft.newOrderSummary.push(chosenProduct)
            chosenProductIndex = null
          }
        } else {
          draft.newOrderSummary.push(chosenProduct)
        }
      })
    }
    case 'DELETE_ORDER_SUMMARY_ITEM': {
      return produce(state, (draft) => {
        const newOrderSummary = draft.newOrderSummary.filter((item) => item.index !== action.index)
        draft.newOrderSummary = newOrderSummary
        draft.totalPrice -= action.price * action.quantity
      })
    }
    case 'POST_NEW_ORDER': {
      return produce(state, (draft) => {
        const orders = draft.orders
        const closedOrders = draft.closedOrders
        const newOrderSummary = draft.newOrderSummary
        const profiles = state.profiles
        const stateOrders = state.orders

        const orderNumber = () => {
          if (orders.length < 10) {
            return `00${orders.length + closedOrders.length + 1}`
          } else if (orders.length >= 10 && orders.length < 100) {
            return `0${orders.length + closedOrders.length + 1}`
          }
        }
        let orderItems = []
        newOrderSummary.map(({ index, itemName, quantity, size, unit }) => {
          let itemTemplate = {
            index: `${index}`,
            complete: false,
            item: `${itemName}`,
            quantity: `${quantity}`,
            size: `${size}`,
            unit: `${unit}`,
          }

          orderItems.push(itemTemplate)
        })

        const orderTemplate = {
          number: `${orderNumber()}`,
          status: 'notReady',
          complete: false,
          orderItems: orderItems,
          profiles: profiles,
          guid: faker.datatype.uuid(),
          startDate: new Date(Date.now()),
          endDate: 0,
        }

        let newOrder = []

        if (newOrderSummary.length > 0) {
          newOrder.push(orderTemplate)
          draft.orders = [...stateOrders, ...newOrder]
          draft.newOrderSummary = []
          draft.totalPrice = 0.0
          draft.chosenProduct = []
        }
      })
    }
    case 'CHECK_INGR_AVAILABILITY': {
      return produce(state, (draft) => {
        let ingredientsWithInsufficientQuantity = []
        const productsToManage = action.productsToManage
        const ingredients = action.ingredients

        ingredients.forEach((ingr) =>
          productsToManage.forEach((product, index) => {
            if (ingr.id === product.id) {
              if (product.inState.ready >= ingr.quantity) {
                // (productsToManage[index].inState.locked = +ingr.quantity).toFixed(2)
                // (productsToManage[index].inState.ready -= ingr.quantity).toFixed(2)
              } else {
                let missingQuantity = ingr.quantity - product.inState.ready
                let newIngr = {
                  ...ingr,
                  missingQuantity: missingQuantity,
                }
                ingredientsWithInsufficientQuantity.push(newIngr)
              }
            }
          })
        )
        // });
        draft.ingredientsWithInsufficientQuantity = ingredientsWithInsufficientQuantity
      })
    }
    case 'PRODUCTS_TO_MANAGE': {
      return produce(state, (draft) => {
        const productsToManage = []
        state.groups.forEach((group) =>
          group.products.forEach((product) =>
            product.ingredients.forEach((ingredient) => productsToManage.push(ingredient))
          )
        )
        const sortedproductsToManage = productsToManage.sort((a, b) => a.id - b.id)
        let productsToManageRemovedDuplicates = []
        sortedproductsToManage.forEach((product, index) => {
          if (
            productsToManageRemovedDuplicates.length > 0 &&
            product.id === productsToManageRemovedDuplicates[productsToManageRemovedDuplicates.length - 1].id
          ) {
          } else {
            productsToManageRemovedDuplicates.push(product)
          }
        })
        draft.productsToManage = productsToManageRemovedDuplicates
      })
    }
    default:
      return state
  }
}

export default newOrderState
