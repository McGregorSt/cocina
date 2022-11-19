// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductsMgmt from './views/ProductsMgmt'
import LoginPage from './views/LoginPage'

import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Routes } from 'react-router'

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path='/new-order'>
          <NewOrder />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
        <Route path='/product-state'>
          <ProductsMgmt />
        </Route>
      </Switch>
    </Provider>
  )
}

export default App
