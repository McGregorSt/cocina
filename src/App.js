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
        <Routes>
          <Route path='new-order' element={<NewOrder/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='/product-state' element={<ProductsMgmt/>} />
          <Route exact path='/' element={<Orders/>} />
        </Routes>
      </Provider>
  )
}

export default App
