import React from "react";
import styled, { css } from "styled-components";

import MainTemplate from "../../template/MainTemplate";
import OrderHeading from "../molecules/OrderHeading";
import Button from "../atoms/Button";
import OrderItem from "../molecules/OrderItem";
import { orderDelivered, orderReadyToGo } from "../../_actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { descentOfIngredients } from "../../_actions/productActions";
// import { profiles } from '../../data/profilesJson'

const StyledOrderCard = styled.div`
  // width: 90%;
  border-radius: 15px;
  /* width: ${({ readyToGo, theme }) =>
    readyToGo === "readyToGo" ? `293px` : "300px"}; */
  background-color: ${({ theme }) => theme.grey100};
  box-shadow: ${({ readyToGo, theme }) =>
        readyToGo === "readyToGo" ? theme.black : theme.grey800a}
      0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 25px 0 0 25px;
  position: relative;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 20px;

  ${({ isItemReady }) =>
    isItemReady &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
    `}

  & :first-child() {
    background-color: ${({ theme }) => theme.grey400};
  }
  & :last-child() {
    background-color: ${({ theme }) => theme.grey800};
  }
`;

const StyledOrderItem = styled(OrderItem)`
  ${({ isItemReady }) =>
    isItemReady &&
    css`
      background-color: ${({ theme }) => theme.itemReady};
    `}
`;

const OrderCard = ({ status, complete, orderNo, orderItems, profiles, orderIndex }) => {
  const dispatch = useDispatch();
  // const orders = useSelector(state => state.newOrderState.orders)
  

  const handleOrderDelivery = (orderNo, orderIndex) => {
    dispatch(orderDelivered(orderNo))
    dispatch(descentOfIngredients(orderNo))
  }

  return (
    <MainTemplate>
      <StyledOrderCard readyToGo={status}>
        <OrderHeading status={status} orderNo={orderNo} profiles={profiles} />
        <StyledContent>
          {orderItems.map(
            ({
              quantity,
              item,
              complete,
              details,
              prepDetails,
              index,
              size,
              unit,
            }) => (
              <StyledOrderItem
                key={Math.random()}
                quantity={quantity}
                item={item}
                complete={complete}
                details={details}
                prepDetails={prepDetails}
                orderNo={orderNo}
                index={index}
                size={size}
                unit={unit}
              />
            )
          )}
          <Button
            status={complete}
            onClick={() =>
              status === "readyToGo"
                ? handleOrderDelivery(orderNo, orderIndex)
                : dispatch(orderReadyToGo(orderNo))
            }
          >
            {status === "readyToGo" ? "wydane" : "gotowe"}
          </Button>
        </StyledContent>
      </StyledOrderCard>
    </MainTemplate>
  );
};

// const mapDispatchToProps = dispatch => ({
//   itemReady: (orderNumber, id, status) => dispatch(itemReady(orderNumber, id, status))
// })

export default OrderCard;
