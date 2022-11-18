import React, { useState, useEffect } from 'react'
import EditButton from '../atoms/EditButton'
import styled from 'styled-components'
import minus from '../../assets/remove.svg'
import plus from '../../assets/add.svg'

const StyledProductEdits = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px -2px;
  border-radius: 10px;

  & :nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.grey300};
    border: 1px solid ${({ theme }) => theme.grey350};
  }
  `

const Button = styled(EditButton)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-image: url(${({ icon }) => icon});
  background-size: 50%;
  font-size: 36px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `

const CurrentValue = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  text-align: center;
`

const ProductEdits = ({ currentQuantity, setCurrentQty }) => {
  const [valueToAdd, setValueToAdd] = useState(0)

  const handleProductQuantityToAdd = (value, operation) => {
    // operation === 'add' ? setValueToAdd(value + 1) : setValueToAdd(value - 1)
    operation === 'add'
      ? setCurrentQty(value + 1)
      : setCurrentQty(value - 1)
  }

  return (
    <StyledProductEdits>
      <Button
        radius='10px'
        icon={minus}
        large
        hover
        onClick={() => handleProductQuantityToAdd(currentQuantity, 'substract')}
        disabled={currentQuantity === 0 ? true : false}
      />
      <CurrentValue>{currentQuantity}</CurrentValue>
      <Button
        radius='10px'
        icon={plus}
        large
        hover
        onClick={() => handleProductQuantityToAdd(currentQuantity, 'add')}
      />
      {/* <Button icon={plus} large onClick={() => } /> */}
    </StyledProductEdits>
  )
}

export default ProductEdits
