import React from 'react'
import ProductToOrder from '../atoms/ProductToOrder'
import { useDispatch } from 'react-redux'
import { checkMealAvailability, chooseGroup, showOrderSummary } from '../../_actions/newOrderActions'

const  ProductGroup = ({ id, name }) => {  

  const dispatch = useDispatch()

  const handleGroupChoice = () => { 
    dispatch(chooseGroup(id, name))
    dispatch(checkMealAvailability())
    dispatch(showOrderSummary())
  }

  return <ProductToOrder onClick={() => handleGroupChoice()} productGroup>
      <span>{name}</span>
    </ProductToOrder>
}

export default ProductGroup
