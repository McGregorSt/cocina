import { combineReducers } from 'redux'
import ordersState from './ordersState'
import loginState from './loginState'
import appState from './appState'
import productState from './productState'
import newOrderState from './newOrderState'

export const rootReducer = combineReducers({
  ordersState,
  loginState: loginState,
  appState: appState,
  productState: productState,
  newOrderState
})