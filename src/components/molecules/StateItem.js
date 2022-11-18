import React from 'react'
import Icon from '../atoms/Icon'
import styled from 'styled-components'

const StyledStateItem = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  font-size: 26px;
  font-weight: 200;
  /* &:nth-child(n) {
    padding: 40px 0;
  } */
`

const StateItem = ({ icon, quantity }) => {
  return (
    <StyledStateItem>
      <Icon icon={icon} />
      <div>{quantity}</div>
    </StyledStateItem>
  )
}

export default StateItem
