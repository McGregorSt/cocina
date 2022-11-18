import React from 'react'
import styled from 'styled-components'
import EditButton from '../atoms/EditButton'

const StyledPieContainer = styled.div`
  transform: rotate(-12deg);
  /* position: relative; */
  & .palette {
    height: 200px;
    width: 200px;
    position: relative;
    margin: 20px;
  }
  & .palette > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* border:50px solid var(--c,red); */
    border-radius: 50%;
    clip-path: polygon(50% 50%, 60% 0%, 100% 0%, 100% 33.745%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  & .color1 {
    transform: rotate(-0deg) translate(10px, -10px);
    /* background: blue; */
    background: ${({ theme }) => theme.ready};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      transform: rotate(12deg) translate(140px, 5px);
    }
    &:hover {
      background: ${({ theme }) => theme.readyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.readyDark};
    }
  }
  & .color2 {
    transform: rotate(60deg) translate(10px, -10px);
    background: ${({ theme }) => theme.ready};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      transform: rotate(-48deg) translate(60px, 125px);
    }
    &:hover {
      background: ${({ theme }) => theme.readyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.readyDark};
    }
  }
  & .color3 {
    transform: rotate(120deg) translate(10px, -10px);
    background: ${({ theme }) => theme.ready};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      /* transform: rotate(-48deg) translate(60px, 120px); */
      transform: rotate(-108deg) translate(-75px, 120px);
    }
    &:hover {
      background: ${({ theme }) => theme.readyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.readyDark};
    }
  }
  & .color4 {
    transform: rotate(180deg) translate(10px, -10px);
    background: ${({ theme }) => theme.notReady};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      transform: rotate(-168deg) translate(-140px, -5px);
    }
    &:hover {
      background: ${({ theme }) => theme.notReadyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.notReadyDark};
    }
  }
  & .color5 {
    transform: rotate(240deg) translate(10px, -10px);
    background: ${({ theme }) => theme.notReady};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      transform: rotate(-228deg) translate(-60px, -125px);
    }
    &:hover {
      background: ${({ theme }) => theme.notReadyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.notReadyDark};
    }
  }
  & .color6 {
    transform: rotate(300deg) translate(10px, -10px);
    background: ${({ theme }) => theme.notReady};
    cursor: pointer;
    & > * {
      font-size: 24px;
      font-weight: 400;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 5;
      transform: rotate(-288deg) translate(75px, -120px);
    }
    &:hover {
      background: ${({ theme }) => theme.notReadyHalfDark};
    }
    &:active {
      background: ${({ theme }) => theme.notReadyDark};
    }
  }
  & .innerCircle {
    transform: rotate(12deg);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.grey400};
    position: absolute;
    top: 30%;
    left: 30%;
    right: 0%;
    bottom: 0%;
  }
`
const StyledPiece = styled.div`
  transform: rotate(120deg) translate(10px, -10px);
  background: ${({ theme }) => theme.ready};
  &button {
    font-size: 18px;
    position: absolute;
    background-color: yellowgreen;
    z-index: 5;
    transform: rotate(70deg) translate(-50px, 90px);
  }
`
const StyledEditButton = styled(EditButton)`
  background-color: ${({ add, theme }) => (add ? theme.ready : theme.notReady)};
  font-size: 24px;
  border-radius: 50%;
  margin: 15px 15px;
`

const PieChart = ({ currentValue, setCurrentValue }) => {
  return (
    <StyledPieContainer>
      <div className='palette'>
        <div
          className='color1'
          onClick={() => setCurrentValue(currentValue + 1)}
        >
          <button>+1</button>
        </div>
        <div
          className='color2'
          onClick={() => setCurrentValue(currentValue + 2)}
        >
          <button>+2</button>
        </div>
        <div
          className='color3'
          onClick={() => setCurrentValue(currentValue + 5)}
        >
          <button>+5</button>
        </div>
        <div
          className='color4'
          onClick={() => setCurrentValue(currentValue - 1)}
          
        >
          <button disabled={currentValue < 1}>-1</button>
        </div>
        <div
          className='color5'
          onClick={() => setCurrentValue(currentValue - 2)}
        >
          <button disabled={currentValue < 2}>-2</button>
        </div>
        <div
          className='color6'
          onClick={() => setCurrentValue(currentValue - 5)}
        >
          <button disabled={currentValue < 5}>-5</button>
        </div>
        {/* 
        <div className='color3'></div>
        <div className='color4'></div>
        <div className='color5'></div>
        <div className='color6'></div> */}
      </div>
      <div className='innerCircle'>
        <StyledEditButton
          large
          boxShadow
          radius='10%'
          style={{
            fontSize: '42px',
            fontWeight: '700',
            background: 'whitesmoke',
            position: 'absolute',
          }}
          onChange={(e) => setCurrentValue(e.target.value)}
        >
          {currentValue}
        </StyledEditButton>
      </div>
    </StyledPieContainer>
  )
}

export default PieChart
