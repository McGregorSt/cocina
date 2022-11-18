import React from "react";
import styled from "styled-components";
import DeleteButton from "../atoms/DeleteButton";
import ItemNameAndSize from "../atoms/ItemNameAndSize";
import ItemPrice from "../atoms/ItemPrice";
import ItemQuantity from "../atoms/ItemQuantity";

const StyledNewOrderSummaryItem = styled.div`
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  padding: 5px 10px;
  // border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  margin-bottom: 20px;

  &:nth-child(n) {
    align-items: center;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
const NewOrderSummaryItem = ({ index, name, price, size, unit, quantity, ingredients }) => {
  return (
    <StyledNewOrderSummaryItem>
      <ItemQuantity quantity={quantity} />
      <ItemNameAndSize name={name} size={size} unit={unit} />
      <ItemPrice price={price} />
      <DeleteButton index={index} price={price} ingredients={ingredients}/>
    </StyledNewOrderSummaryItem>
  );
};

export default NewOrderSummaryItem;
