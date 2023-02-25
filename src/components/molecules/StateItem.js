import React from 'react'
import Icon from '../atoms/Icon'
import styled from 'styled-components'

const StyledStateItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 26px;
  font-weight: 200;
`

const StateItem = ({ icon, quantity }) => {
  return (
    <StyledStateItem>
      <Icon icon={icon} />
      <div>{quantity.toFixed(2)}</div>
    </StyledStateItem>
  )
}

export default StateItem
