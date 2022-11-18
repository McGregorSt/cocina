import React, {useState} from 'react';
import styled, { css } from 'styled-components'
import unchecked from '../../assets/check_box_blank.svg'
import checked from '../../assets/check_box.svg'


const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${unchecked});
  background-size: 95%;
  background-repeat: no-repeat;
  cursor: pointer;
  
  ${({ clicked }) => 
    clicked && css`
      background-image: url(${checked});
    `
  }

`

const Checkbox = ({ selected }) => {

  return (
    <div>
      <StyledCheckbox  clicked={selected}/>
    </div>
  )
}

export default Checkbox;
