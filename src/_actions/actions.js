export const itemComplete = (orderNumber, index) => {
  return {
    type: 'ITEM_READY',
    orderNumber, 
    index
  }
}

export const allItemsReady = (orderNumber) => {
  return {
    type: 'ALL_ITEMS_READY',
    orderNumber
  }
}

export const orderStatus = (orderNumber) => {
  return {
    type: 'ORDER_STATUS',
    orderNumber
  }
}

export const profileSelected = (orderNumber, profile) => {
  return {
    type: 'PROFILE_SELECTED',
    orderNumber,
    profile
  }
}

export const orderDelivered = (orderNumber) => {
  return {
    type: 'ORDER_DELIVERED',
    orderNumber
  }
}
export const orderReadyToGo = (orderNumber) => {
  return {
    type: 'ORDER_READY_TO_GO',
    orderNumber
  }
}
