import React from 'react'
import EditButton from '../atoms/EditButton'
import ProductName from './ProductName'
import more from '../../assets/more_horiz.svg'
import check from '../../assets/check-round.svg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductToState,
  changeStatus,
  showProductOnRightSidebar,
  showRightSidebar,
  updateStateRightsidebar,
} from '../../_actions/productActions'

const StyledProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 120px; */
  
`

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  & :nth-child(n) {
    background-size: 50%;
    border-bottom: 1px solid ${({ theme }) => theme.grey300};
  }
  
  & :first-child {
    padding: 0;
    border-radius: 0 10px 0 0;
  }
`

const ProductFooter = ({ name, id, currentQuantity, setCurrentQty }) => {
  const dispatch = useDispatch()

  const handleRightSidebar = () => {
    dispatch(showRightSidebar())
    dispatch(showProductOnRightSidebar(id))
    dispatch(updateStateRightsidebar())
  }
  const handleAddProductToState = (id, value) => {
    dispatch(addProductToState(id, value))
    dispatch(changeStatus(id, value))
    setCurrentQty(0)
  }

  return (
    <StyledProductFooter>
      <ProductName >{name}</ProductName>
      <StyledIcons>
        <EditButton
          icon={check}
          medium
          hover
          onClick={() => handleAddProductToState(id, currentQuantity)}
        />
        <EditButton
          icon={more}
          medium
          hover
          onClick={(id) => handleRightSidebar(id)}
        />
        {/* <EditButton icon={more} medium onClick={() => dispatch(showRightSidebar(id))}/> */}
      </StyledIcons>
    </StyledProductFooter>
  )
}

export default ProductFooter
