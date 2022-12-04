import React from 'react'
import styled from 'styled-components'
import Avatar from '../atoms/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { profileSelected } from '../../_actions/actions'

const StyledOrderHeading = styled.div`
  background-color: ${({ status, theme }) => (status ? theme[status] : '')};
  border-radius: 15px 15px 0 0;
  padding: 15px 5px 15px 20px;
  font-family: 'Black Ops One';
  font-size: 26px;
  display: flex;
  justify-content: space-between;
`

const StyledUsers = styled.div`
  height: 30px;
  margin-left: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
`

const OrderHeading = ({ orderNumber, status, profiles }) => {
  const dispatch = useDispatch()
  const profilesOn = useSelector((state) => state.appState.profilesOn)

  return (
    <StyledOrderHeading status={status}>
      # {orderNumber}
      <StyledUsers>
        {profilesOn
          ? profiles.map((profile) => {
              console.log(profile)
              return (
                <Avatar
                  key={Math.random()}
                  onClick={() => dispatch(profileSelected(orderNumber, profile))}
                  active={profile.isActive}
                  avatarType={profile.url}
                />
              )
            })
          : ''}
      </StyledUsers>
    </StyledOrderHeading>
  )
}

export default OrderHeading
