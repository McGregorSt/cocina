import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { theme } from "../../theme/Theme";
import NewOrderSummaryFooter from "../molecules/NewOrderSummaryFooter";
import NewOrderSummaryItem from "../molecules/NewOrderSummaryItem";

const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  height: 75%;
  width: 450px;
  position: relative;
  background-color: ${({ theme }) => theme.gold};
  border-top: 10px solid ${theme.grey800};
  border-left: 35px solid ${theme.grey800};
  border-bottom: 10px solid ${theme.grey800};
  color: ${theme.grey800};
  padding: 0 10px 20px 10px;
  /* position: fixed; */
  top: 10%;
  left: 465px;
  // bottom: 50%;
  & * > p {
    font-size: 1.1rem;
    font-weight: 600;
  }
  ${({ active }) => 
    active && css`
      left: 0;
      transition: 0.5s;
      /* z-index: -100; */
    `
  }
`;

const OrderSummary = () => {
  const newOrderSummary = useSelector(
    (state) => state.newOrderState.newOrderSummary
  );
  const showOrderSummary = useSelector(
    (state) => state.newOrderState.showOrderSummary
  );

  return (
    <StyledOrderSummary active={true}>
      <div>
        <p>Twoje zamówienie:</p>
        {newOrderSummary.map(
          ({ index, itemName, price, size, unit, quantity, ingredients }) => (
            <NewOrderSummaryItem
              key={Math.random()}
              name={itemName}
              index={index}
              price={price}
              size={size}
              unit={unit}
              quantity={quantity}
              ingredients={ingredients}
            />
          )
        )}
      </div>
      <NewOrderSummaryFooter />
    </StyledOrderSummary>
  );
};

export default OrderSummary;
