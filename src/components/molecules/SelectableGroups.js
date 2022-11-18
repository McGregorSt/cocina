import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductGroup from './ProductGroup'

const StyledSelectableGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
`
const SelectableGroups = () => {
  const productGroups = useSelector((state) => state.newOrderState.groups)

  return (
    <div>
      <StyledSelectableGroup>
        {productGroups.map(({ id, name }) => (
          <ProductGroup key={Math.random()} name={name} id={id} />
        ))}
      </StyledSelectableGroup>
    </div>
  )
}

export default SelectableGroups
