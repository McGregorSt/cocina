import { combineReducers } from 'redux'
// import ordersReducer from './ordersReducer'
import loginReducer from './loginReducer'
import mainReducer from './mainReducer'
import productReducer from './productReducer'
import newOrderState from './newOrderState'

export const rootReducer = combineReducers({
  // ordersReducer,
  loginReducer,
  mainReducer,
  productReducer,
  newOrderState
})