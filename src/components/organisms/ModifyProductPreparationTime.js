import React, { useState, useEffect } from 'react'
import EditButton from '../atoms/EditButton'
import Heading from '../atoms/Heading'
import Clock from '../molecules/Clock'
import styled from 'styled-components'
import { changePreparationTime } from '../../_actions/productActions'
import { useSelector } from 'react-redux'

const StyledModifyProductPreparationTime = styled.div`
  margin: 30px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.opacityBackground};
`

const ModifyProductPreparationTime = ({ toPrepare }) => {
  return (
    <StyledModifyProductPreparationTime>
      <Clock toPrepare={toPrepare}/>
    </StyledModifyProductPreparationTime>
  )
}

export default ModifyProductPreparationTime
