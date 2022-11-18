export const productsReadyToManage = () => {
  return {
    type: 'PRODUCTS_TO_MANAGE',
  }
}
export const showRightSidebar = () => {
  return {
    type: 'SHOW_RIGHT_SIDEBAR',
  }
}
export const closeRightSidebar = () => {
  return {
    type: 'CLOSE_RIGHT_SIDEBAR'
  }
}
export const addProductToState = (id, currentValue) => {
  return {
    type: 'ADD_PRODUCT_TO_STATE',
    id, 
    currentValue
  }
}
export const updateValueToAdd = (id, currentValue) => {
  return {
    type: 'UPDATE_VALUE_TO_ADD',
    id, 
    currentValue
  }
}
export const changeProductCounter = () => {
  return {
    type: 'CHANGE_PRODUCT_COUNTER'
  }
}
export const showProductOnRightSidebar = (id) => {
  return {
    type: 'SHOW_PRODUCT_ON_RIGHTSIDEBAR',
    id
  }
}
export const changePreparationTime = (id, minutes, seconds) => {
  return {
    type: 'CHANGE_PREPARATION_TIME',
    payload: {
      id, 
      minutes,
      seconds
    }
  }
}
export const timerTick = (id, time) => {
  return {
    type: 'TIMER_TICK',
    payload: {
      id,
      time
    }
  }
} 
export const changeStatus = (id) => {
  return {
    type: 'CHANGE_STATUS',
    id
  }
} 
export const updateStateRightsidebar = () => {
  return {
    type: 'UPDATE_STATE_RIGHTSIDEBAR',
  }
} 
export const productViewLoadTime = () => {
  return {
    type: 'PRODUCT_VIEW_LOAD_TIME',
  }
} 
export const preparationReady = (id, productId) => {
  return {
    type: 'PREPARATION_READY',
    payload: {
      id,
      productId
    }
  }
} 
export const stockEntryRemove = (id, productId) => {
  return {
    type: 'STOCK_ENTRY_REMOVE',
    payload: {
      id,
      productId
    }
  }
} 
export const lockIngredients = () => (dispatch, getState) => {
  const ingredientsToReserve = getState().newOrderState.ingredientsToReserve
  dispatch({
    type: "LOCK_INGREDIENTS",
    ingredientsToReserve: ingredientsToReserve,
  });
};
export const descentOfIngredients = (orderNo) => (dispatch, getState) => {
  const mealGroups = getState().newOrderState.groups
  const orders = getState().newOrderState.orders
  dispatch({
    type: "DESCENT_OF_INGREDIENTS",
    mealGroups: mealGroups,
    orderNo,
    orders: orders
  });
};