import React from 'react'
import styled, { css } from 'styled-components'

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 800px;
  height: 100vh;
  border-left: 10px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const StyledProductName = styled.h1`
  font-weight: 200;
`

const StyledQuantity = styled.div`
  width: 50px;
  height: 40px;
  background-color: ${({ theme }) => theme.ready};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: ${({ big }) => (big ? '16px' : '12px')};
  text-transform: lowercase;
  cursor: pointer;

  ${({ minus }) =>
    minus &&
    css`
      background-color: ${({ theme }) => theme.notReady};
    `}
`

const StyledCurrentQuantity = styled(StyledQuantity)`
  background-color: ${({ theme }) => theme.grey200};
  color: hsla(0, 0%, 0%, 80%);
  font-size: 22px;
  font-weight: 500;
  border-bottom: 1px solid black;
`

const StyledQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

// const StyledInputRange = styled.div`
//   input[type='range']::-webkit-slider-thumb {
//     height: 12px;
//     width: 45px;
//     cursor: pointer;
//     -webkit-appearance: none;
//     border-bottom: 1px solid #29334f;
//     box-shadow: 0 0 0 red, -40px 0 0 red, -85px 0 0 red, -130px 0 0 red,
//       -175px 0 0 red, -220px 0 0 red, -265px 0 0 red, -310px 0 0 red,
//       -350px 0 0 red, -390px 0 0 red, -409px 0 0 red;
//     background: black;
//   }
// `
const StyledContainer = styled.div`
  position: relative;
  max-width: 450px;
  overflow: hidden;
  --thumb-color: #ef3e36;
  --thumb-behind-color: #FDB89F;
  --thumb-minus-behind-color: green;
`

const StyledInputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;

  :focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    /* border: 1px solid var(--tracker-color); */
    overflow: hidden;
  }

  ::-webkit-slider-thumb {
    height: 12px;
    width: 45px;
    cursor: pointer;
    -webkit-appearance: none;
    border-bottom: 1px solid var(--thumb-color);
    box-shadow: 0 0 0 var(--thumb-behind-color),
      -40px 0 0 var(--thumb-behind-color), -85px 0 0 var(--thumb-behind-color),
      -130px 0 0 var(--thumb-behind-color), -175px 0 0 var(--thumb-behind-color),
      -220px 0 0 var(--thumb-minus-behind-color), -265px 0 0 var(--thumb-minus-behind-color),
      -310px 0 0 var(--thumb-minus-behind-color), -350px 0 0 var(--thumb-minus-behind-color),
      -390px 0 0 var(--thumb-minus-behind-color), -409px 0 0 var(--thumb-minus-behind-color);
    background: var(--thumb-color);
  }
`

const StyledDatalist = styled.datalist`
  display: flex;
  justify-content: space-between;

  & option {
    position: relative;
    background: white;
    top: 19px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    min-height: 11px;

    &::first-of-type {
      visibility: hidden;
    }
    &::last-of-type {
      border-right: 0;
    }
  }
`

const Sidebar = () => {
  return (
    <StyledWrapper>
      <StyledProductName>Parówka klasyczna</StyledProductName>
      <ul>
        <span>czas przygotowania</span>
        <StyledQuantityWrapper>
          <StyledQuantity minus>-5m</StyledQuantity>
          <StyledQuantity minus>-1m</StyledQuantity>
          <StyledQuantity big minus>
            -30s
          </StyledQuantity>
          <StyledQuantity big minus>
            -10s
          </StyledQuantity>
          <StyledCurrentQuantity>7:40</StyledCurrentQuantity>
          <StyledQuantity big>+10s</StyledQuantity>
          <StyledQuantity big>+30s</StyledQuantity>
          <StyledQuantity>+1m</StyledQuantity>
          <StyledQuantity>+5m</StyledQuantity>
        </StyledQuantityWrapper>
        <li>
          ilości do umniejszenia stanu
          <StyledContainer class='container'> 
            <StyledDatalist id='custom-list'>
              <option value='-5'></option>
              <option value='-4'></option>
              <option value='-3'></option>
              <option value='-2'></option>
              <option value='-1'></option>
              <option value='0'></option>
              <option value='1'></option>
              <option value='2'></option>
              <option value='3'></option>
              <option value='4'></option>
              <option value='5'></option>
            </StyledDatalist>
            <StyledInputRange
              type='range'
              min='-5'
              max='5'
              step='1'
              list='custom-list'
              defaultValue='4'
            />
          </StyledContainer>
        </li>
        <li>
          kolejka produktu z ilościami i czasami do przygotowania + oznaczenie,
          że gotowe
        </li>
      </ul>
      Sidebar
    </StyledWrapper>
  )
}

export default Sidebar
