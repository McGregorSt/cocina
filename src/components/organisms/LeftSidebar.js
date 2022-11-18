import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { profilesOn } from "../../_actions/mainActions";
import ToggleSwitch from "../atoms/ToggleSwitch";

const StyledSidebar = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.leftSidebar.width};
  height: ${({ theme }) => theme.leftSidebar.height};
  left: -${({ theme }) => theme.leftSidebar.width};
  transition-duration: 0.5s;
  background-color: ${({ theme }) => theme.grey800a};
  border-right: 0px solid ${({ theme }) => theme.grey800};
  /* opacity: 0.6; */
  z-index: 3;

  ${({ active }) =>
    active &&
    css`
      border-right: 12px solid ${({ theme }) => theme.grey800};
      left: 0px;
      & :before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(5px);
        /* background: whitesmoke; */
        /* margin: 10px; */
      }
    `}
`;
const StyledMenuList = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  padding: 20px 10px;
  color: ${({ theme }) => theme.grey200};
  &:hover {
    color: ${({ theme }) => theme.grey800};
    background-color: ${({ theme }) => theme.twitters};
    cursor: pointer;
  }
`;

const StyledVersion = styled.div`
  position: fixed;
  bottom: 30px;
  padding: 0 10px;
  color: ${({ theme }) => theme.grey200};
`;

const LeftSidebar = () => {
  const showSidebar = useSelector((state) => state.mainReducer.showSidebar);
  const profiles = useSelector((state) => state.mainReducer.profilesOn);
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch(profilesOn());
  };

  return (
    <StyledSidebar active={showSidebar}>
      <StyledMenuList>
        <StyledMenuItem>
          Profile
          <div onClick={(e) => handleToggle(e)}>
            <ToggleSwitch checked={profiles} />
          </div>
        </StyledMenuItem>
        {/* <StyledMenuItem>Zarządzanie użytkownikami</StyledMenuItem>
        <StyledMenuItem>Wyloguj</StyledMenuItem> */}
      </StyledMenuList>
      <StyledVersion>Wersja systemu KtchnApp: 1.0.7734.2</StyledVersion>
    </StyledSidebar>
  );
};

export default LeftSidebar;
