import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../theme/Theme";
import UserPage from "../template/UserPage";
import SelectableGroups from "../components/molecules/SelectableGroups";
import SelectableProducts from "../components/molecules/SelectableProducts";
import OrderSummary from "../components/organisms/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { newOrderViewClearance } from "../_actions/newOrderActions";

const StyledNewOrder = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  overflow-x: hidden;
  // padding: 30px 0;
  position: relative;
  z-index: 2;
  &:nth-child(2n+2) {
    position: fixed;
    top: 250px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
`;

const StyledProductsSelection = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const NewOrder = () => {
  const showOrderSummary = useSelector(state => state.newOrderState.showOrderSummary)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(newOrderViewClearance())
  //   console.log('efekt')
  // })

  return (
    // <div>
      <UserPage>
        <StyledNewOrder>
          <StyledProductsSelection>
            <SelectableGroups />
            <SelectableProducts />
          </StyledProductsSelection>
          <OrderSummary />
        </StyledNewOrder>
      </UserPage>
    // </div>
  );
};

export default NewOrder;
