import React, { useState, useEffect } from 'react'
import Heading from '../atoms/Heading'
import ProductActual from '../molecules/ProductActual'
import dining from '../../assets/dining.svg'
import schedule from '../../assets/schedule.svg'
import lock from '../../assets/lock.svg'
import styled from 'styled-components'
import { productActualData } from '../../data/productActualJson'
import { useSelector } from 'react-redux'

const StyledActualState = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`

const CurrentProductState = ({ productId, inState, toPrepare }) => {
  // const inState = useSelector(
  //   (state) => state.productReducer.productToDisplayOnRightSidebar.inState
  // )
  // const stockEntries = useSelector(
  //   (state) => state.productReducer.productToDisplayOnRightSidebar.stockEntries
  // )
  // const inState = useSelector(
  //   (state) => state.productReducer.productToDisplayOnRightSidebar.inState
  // )
  // const toPrepare = useSelector(
  //   (state) => state.productReducer.productToDisplayOnRightSidebar.inState
  // )
  // const [showTable, setShowTable] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowTable(true)
  //   }, 0)
  // })

  // const productStatesTable = (
    return (
      <div>
        <Heading>aktualny stan produktu:</Heading>
        <StyledActualState>
          <ProductActual inState={inState} toPrepare={toPrepare}/>
        </StyledActualState>
      </div>

    )

      
  // return stockEntries.length > 0 ? productStatesTable : '' 
}

export default CurrentProductState
