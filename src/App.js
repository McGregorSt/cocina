// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductSupply from './views/ProductSupply'

import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/new-order' element={<NewOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product-supply' element={<ProductSupply />} />
        <Route path='/' element={<NewOrder />} />
      </Routes>
    </Provider>
  )
}

export default App
