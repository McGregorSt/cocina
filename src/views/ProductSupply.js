import React from 'react'
import Product from '../components/organisms/Product'
import UserPage from '../template/UserPage'
import { useSelector } from 'react-redux'

const ProductSupply = () => {
  const productsToManage = useSelector((state) => state.productReducer.productsToManage)

  return (
    <UserPage>
      { productsToManage.map((product) => (
            <Product
              key={Math.random()}
              id={product.id}
              name={product.name}
              currentQuantity={product.currentQuantity}
              defaultTime={product.defaultTime}
              inState={product.inState}
              stockEntries={product.stockEntries}
              toPrepare={product.toPrepare}
              countable={product.countable}
            />
          ))}
    </UserPage>
  )
}

export default ProductSupply
