import React, { useState, useEffect } from 'react'
import Input from '../atoms/Input'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import EditButton from '../atoms/EditButton'
import { changePreparationTime } from '../../_actions/productActions'
import check from '../../assets/check-round.svg'
import Heading from '../atoms/Heading'

const StyledClock = styled.div`
  height: 100%;
`

const StyledHeader = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledDefaultTime = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  /* font-family: 'Roboto'; */
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 20px 50px;
`

const StyledClockInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  & > span {
    padding: 0 20px;
  }
  & > input {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`

const Clock = ({ toPrepare }) => {
  const productToDisplay = useSelector(
    (state) => state.productReducer.productToDisplayOnRightSidebar
  )
  const time = useSelector(
    (state) => state.productReducer.productToDisplayOnRightSidebar.defaultTime
  )
  const [mins, setMins] = useState('')
  const [secs, setSecs] = useState('')
  const dispatch = useDispatch()

  const [minutes, setMinutes] = useState(time.minutes)
  const [seconds, setSeconds] = useState(time.seconds)

  const handleTimeConfirm = () => {
    dispatch(changePreparationTime(productToDisplay.id, mins, secs))
    setMinutes(mins)
    setSeconds(secs)
    setMins('')
    setSecs('')
  }
  const timeFormat = (unit) => {
    if (unit === '') {
      return (unit = `00`)
    }
    if (unit < 10) {
      unit = `0${unit}`
      return unit
    }
    return `${unit}`
  }
  const handleInputChange = (e, type) => {
    const pattern = /^([0-9]|[0-5][0-9]){0,1}$/
    if (pattern.test(e.target.value)) {
      type === 'mins' ? setMins(e.target.value) : setSecs(e.target.value)
    }
  }

  return (
    <StyledClock >
      <StyledHeader>
        <Heading>czas przygotowania</Heading>
        <EditButton
          icon={check}
          medium
          color='hsl(49, 100%, 58%, 80%)'
          size='60%'
          boxShadow
          style={{ borderRadius: '10px' }}
          onClick={() => handleTimeConfirm()}
          disabled={!toPrepare}
          />
      </StyledHeader>
      <StyledClockInputs>
        <Input
          size='60px'
          placeholder='min'
          type='text'
          onChange={(e, type) => handleInputChange(e, (type = 'mins'))}
          value={mins}
          disabled={!toPrepare}
          />
        <span>:</span>
        <Input
          size='60px'
          placeholder='sec'
          type='text'
          onChange={(e) => handleInputChange(e)}
          value={secs}
          disabled={!toPrepare}
        />
      </StyledClockInputs>
      {toPrepare ? (
        <StyledHeader>
          <Heading>domyślnie</Heading>
          <StyledDefaultTime>
            {timeFormat(minutes)} : {timeFormat(seconds)}
          </StyledDefaultTime>
        </StyledHeader>
      ) : (
        ''
      )}
    </StyledClock>
  )
}

export default Clock
