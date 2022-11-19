import React from 'react'
import Clock from '../molecules/Clock'
import styled from 'styled-components'

const StyledModifyProductPreparationTime = styled.div`
  margin: 30px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.opacityBackground};
`

const ModifyProductPreparationTime = ({ toPrepare }) => {
  return (
    <StyledModifyProductPreparationTime>
      <Clock toPrepare={toPrepare} />
    </StyledModifyProductPreparationTime>
  )
}

export default ModifyProductPreparationTime
