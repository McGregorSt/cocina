import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../_reducers/index'

const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk)
)

export const store = createStore(rootReducer, composedEnhancers)