import React, { useEffect } from "react";
import styled from "styled-components";
import menu from "../../assets/menu-white.svg";
import orders from "../../assets/orders.svg";
import order from "../../assets/order.svg";
import closedOrder from "../../assets/order_play.svg";
import tv from "../../assets/tv.svg";
import management from "../../assets/business-management.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  height: 100%;
  display: flex;
`;
const StyledNavItem = styled(NavItem)`
  padding: 0px 20px;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
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
  left: 10px;
  cursor: pointer;
`;

const Navbar = () => {
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
          <StyledNavItem as={NavLink} to="/orders">
            <NavItem itemName="orders" itemIcon={order} activeclass="active" />
          </StyledNavItem>
          <StyledNavItem as={NavLink} to="/product-supply">
            <NavItem
              itemName="product supply"
              itemIcon={management}
              activeclass="active"
            />
          </StyledNavItem>
          <StyledNavItem as={NavLink} to="/closed-orders">
            <NavItem
              itemName="closed orders"
              itemIcon={closedOrder}
              activeclass="active"
            />
          </StyledNavItem>
          <StyledNavItem as={NavLink} to="/customer-view">
            <NavItem
              itemName="customer view"
              itemIcon={tv}
              activeclass="active"
            />
          </StyledNavItem>
        </StyledItems>
      </StyledWrapper>
    </div>
  );
};

export default Navbar;
