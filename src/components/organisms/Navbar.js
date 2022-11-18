import React, { useEffect } from "react";
import styled from "styled-components";
import menu from "../../assets/menu-white.svg";
import orders from "../../assets/orders.svg";
import checklist from "../../assets/checklist.svg";
import management from "../../assets/business-management.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentView, showLeftSidebar } from "../../_actions/mainActions";
import NavItem from "../molecules/NavItem";

const StyledWrapper = styled.div`
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${({ theme }) => theme.grey800};
  top: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  `;
const StyledItems = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledNavItem = styled(NavItem)`
  height: 100%;
  padding: 5px 20px;
  /* margin: 0 50px; */
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 5px solid transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.grey100};
  background-color: ${({ theme }) => theme.grey800};
  &.active {
    filter: invert(88%) sepia(29%) saturate(16%) hue-rotate(86deg)
      brightness(108%) contrast(119%);
  }
`;

const StyledToolbar = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${menu});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 60%;
  color: white;
  position: absolute;
  /* top: 5px; */
  left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  const username = useSelector(
    (state) => state.loginReducer[0].username || state.loginReducer[1].username
  );
  const dispatch = useDispatch();

  const slashUrl = window.location.pathname;

  useEffect(() => {
    dispatch(changeCurrentView(slashUrl));
  });

  return (
    <div>
      <StyledWrapper>
        <StyledToolbar onClick={() => dispatch(showLeftSidebar())} />
        <StyledItems>
          <StyledNavItem as={NavLink} to="/new-order">
            <NavItem
              itemName="new order"
              itemIcon={orders}
              activeclass="active"
            />
          </StyledNavItem>
          <StyledNavItem exact as={NavLink} to="/orders">
            <NavItem
              itemName="orders"
              itemIcon={checklist}
              activeclass="active"
            />
          </StyledNavItem>
          <StyledNavItem as={NavLink} to="/product-state">
            <NavItem
              itemName="products management"
              itemIcon={management}
              activeclass="active"
            />
          </StyledNavItem>
        </StyledItems>
      </StyledWrapper>
    </div>
  );
};

export default Navbar;
