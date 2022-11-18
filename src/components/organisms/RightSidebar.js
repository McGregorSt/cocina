import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import EditButton from "../atoms/EditButton";
import close from "../../assets/close.svg";
import ProductName from "../molecules/ProductName";
import { closeRightSidebar, timerTick } from "../../_actions/productActions";
import AddProductToState from "./AddProductToState";
import ModifyProductPreparationTime from "./ModifyProductPreparationTime";
import CurrentProductState from "./CurrentProductState";

const StyledSidebar = styled.div`
  /* display: flex;
  flex-direction: column; */
  position: fixed;
  width: ${({ theme }) => theme.rightSidebar.width};
  height: ${({ theme }) => theme.rightSidebar.height};
  right: -${({ theme }) => theme.rightSidebar.width};
  background-color: ${({ theme }) => theme.grey300a};
  padding: 20px 0px;

  z-index: 1;

  ${({ active }) =>
    active &&
    css`
      border-left: 15px solid ${({ theme }) => theme.grey800};
      padding: 20px 10px;
      right: 0px;
      background-color: ${({ theme }) => theme.grey100a};
      backdrop-filter: blur(30px);
      transition-duration: 0.7s;
      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    `}
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const StyledEditButton = styled(EditButton)`
  // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
  // rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  // border-radius: 10px;
  `;
  
  const StyledProductName = styled(ProductName)`
  // background-color: black;
  width: 80%;
  display: flex;
  justify-content: center;
  // margin: 0 30px 0 0;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const StyledAddAndTimeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
`;

const RightSidebar = () => {
  const showRightSidebar = useSelector(
    (state) => state.mainReducer.showRightSidebar
  );
  const { id, name, currentQuantity, inState, defaultTime, toPrepare } =
    useSelector((state) => state.productReducer.productToDisplayOnRightSidebar);

  const dispatch = useDispatch();

  const handleCloseRightSidebar = () => {
    dispatch(closeRightSidebar());
  };

  useEffect(() => {
    // dispatch(productViewLoadTime())
    const timer = setInterval(() => {
      dispatch(timerTick(id));
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <StyledSidebar active={showRightSidebar}>
      <StyledHeader>
        <EditButton
          icon={close}
          medium
          size="70%"
          radius="10px"
          boxShadow
          hover
          onClick={() => handleCloseRightSidebar()}
        ></EditButton>
        <StyledProductName>{name}</StyledProductName>
      </StyledHeader>
      <StyledAddAndTimeWrapper>
        <ModifyProductPreparationTime
          defaultTime={defaultTime}
          toPrepare={toPrepare}
        />
        <AddProductToState />
      </StyledAddAndTimeWrapper>
      <CurrentProductState inState={inState} toPrepare={toPrepare} />
    </StyledSidebar>
  );
};

export default RightSidebar;
