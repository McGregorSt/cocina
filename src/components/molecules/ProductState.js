import React from 'react'
import styled from 'styled-components'
import lockIcon from '../../assets/lock.svg'
import diningIcon from '../../assets/dining.svg'
import scheduleIcon from '../../assets/schedule.svg'
import StateItem from './StateItem'

const StyledProductState = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10px;

`

const ProductState = ({ inState, toPrepare }) => {
  return (
    <StyledProductState>
      {' '}
      {toPrepare ? (
        <StateItem icon={scheduleIcon} quantity={inState.preparation} />
      ) : (
        ''
      )}{' '}
      <StateItem icon={lockIcon} quantity={inState.locked} />{' '}
      <StateItem icon={diningIcon} quantity={inState.ready} />{' '}
    </StyledProductState>
  )
}

export default ProductState
