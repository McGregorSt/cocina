// import './App.css';
import React from 'react'
import Orders from './views/Orders'
import NewOrder from './views/NewOrder'
import ProductsMgmt from './views/ProductsMgmt'
import LoginPage from './views/LoginPage'

import { Switch, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Navbar from './components/organisms/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      dsdsdkdasd
      <Routes>
        <Route path='/new-order' element={<NewOrder />} />
          
        <Route path='/orders' element={<Orders />} />
        <Route path='/product-state' element={<ProductsMgmt />} />
        <Route exact path='/' element={<NewOrder />}/>
      </Routes>
    </Provider>
  )
}

export default App