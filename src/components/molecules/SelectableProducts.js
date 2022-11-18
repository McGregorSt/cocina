import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductItem from './ProductItem'

const StyledSelectableProducts = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
`
const SelectableProducts = () => {
  const chosenGroup = useSelector((state) => state.newOrderState.chosenGroup)

  return (
    <div>
      <StyledSelectableProducts>
        {chosenGroup === null || !chosenGroup[0].products
          ? ''
          : chosenGroup[0].products.map(({ index, itemName, size, unit, readyToPrepare, ingredients }) => (
              <ProductItem
                key={Math.random()}
                itemName={itemName}
                index={index}
                size={size}
                unit={unit}
                readyToPrepare={readyToPrepare}
                ingredients={ingredients}
              />
            ))}
      </StyledSelectableProducts>
    </div>
  )
}

export default SelectableProducts
