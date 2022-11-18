import React from 'react'
import ProductToOrder from '../atoms/ProductToOrder'
import { useDispatch } from 'react-redux'
import { checkIngrAvailability, checkMealAvailability, chooseProduct } from '../../_actions/newOrderActions'
import styled from 'styled-components'

const StyledProductToOrder = styled(ProductToOrder)`
  display: flex;
  flex-direction: column;
`

const ProductItem = ({ index, itemName, size, unit, readyToPrepare, ingredients }) => {
  const dispatch = useDispatch()

  const handleProductChoice = () => {
    readyToPrepare ? dispatch(checkMealAvailability(), dispatch(chooseProduct(index, itemName)), dispatch(checkIngrAvailability(index, ingredients))) : alert('Product unavailable now')
  }

  return (
    <StyledProductToOrder onClick={() => handleProductChoice()} readyToPrepare={readyToPrepare} disabled={!readyToPrepare}>
      <div>{itemName}</div>
      <div>
        {size} {unit}
      </div>
    </StyledProductToOrder>
  )
}

export default ProductItem
