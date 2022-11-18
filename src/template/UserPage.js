import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/organisms/Navbar'
import styled, { css } from 'styled-components'
import LeftSidebar from '../components/organisms/LeftSidebar'
import MainTemplate from './MainTemplate'
import RightSidebar from '../components/organisms/RightSidebar'
import { closeRightSidebar, productsReadyToManage } from '../_actions/productActions'

const StyledUserPage = styled.div`
  margin-top: 6vh;
  height: ${({ theme }) => theme.leftSidebar.height};
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-content: flex-start;
  position: relative;
  overflow-y: hidden;
  /* padding: 20px; */
  /* margin: 20px; */
  ${({ activeLeft }) =>
    activeLeft &&
    css`
      overflow-x: hidden;
    `}
  ${({ activeRight }) =>
    activeRight &&
    css`
      overflow-x: hidden;
    `}
`

const UserPage = ({ children }) => {
  const showSidebar = useSelector((state) => state.mainReducer.showSidebar)
  const showRightSidebar = useSelector(
    (state) => state.mainReducer.showRightSidebar
  )
  const dispatch = useDispatch()
  // const handleCloseRightSidebar = () => {
  //   dispatch(closeRightSidebar())
  // }

  // useEffect(() => {
  //   dispatch(productsReadyToManage())
  //   console.log('productsToManage')
  // })

  return (
    <MainTemplate >
      <StyledUserPage activeLeft={showSidebar} activeRight={showRightSidebar}>
        <Navbar />
        <LeftSidebar />
        { showRightSidebar ? <RightSidebar /> : ''}
        { children }
      </StyledUserPage>
    </MainTemplate>
  )
}

export default UserPage
