import React, { useEffect } from 'react'
import Product from '../components/organisms/Product'
import UserPage from '../template/UserPage'
import { useSelector, useDispatch } from 'react-redux'

const ProductsMgmt = () => {
  const productsToManage = useSelector((state) => state.productReducer.productsToManage)
  // const productGroupsFromState = useSelector(
  //   (state) => state.newOrderState.productsToManage
  // )
  // const productsToManage = []
  // productGroups.forEach((group) =>
  //   group.products.forEach((product) =>
  //     product.ingredients.forEach((ingredient, index) =>
  //       productsToManage.push(ingredient)
  //     )
  //   )
  // )
  // const sortedproductsToManage = productsToManage.sort((a, b) => a.id - b.id)
  // let productsToManageRemovedDuplicates = []
  // sortedproductsToManage.forEach((product, index) => {
  //   if (
  //     productsToManageRemovedDuplicates.length > 0 &&
  //     product.id ===
  //       productsToManageRemovedDuplicates[
  //         productsToManageRemovedDuplicates.length - 1
  //       ].id
  //   ) {
  //   } else {
  //     productsToManageRemovedDuplicates.push(product)
  //   }
  // })

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(productsReadyToManage())
  //   return () => {
  //     dispatch(productsReadyToManage())
  //   };
  // });

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

export default ProductsMgmt
