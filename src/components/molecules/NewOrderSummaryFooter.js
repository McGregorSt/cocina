import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  checkIngrAvailability,
  checkMealAvailability,
  newOrder,
  postNewOrder,
  reserveProducts,
} from "../../_actions/newOrderActions";
import { lockIngredients } from "../../_actions/productActions";
import EditButton from "../atoms/EditButton";
import NewOrderSummaryItem from "./NewOrderSummaryItem";

const StyledFooter = styled.div`
  // height: 20%;
  // width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: right;
  // &:nth-child(n){
  //   padding: 20px;
  // }
  // position: absolute;
  // bottom: 15px;
`;

const StyledEditButton = styled(EditButton)`
  width: 200px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  font-size: 20px;
  letter-spacing: 1.3px;
  margin: 10px 0;
  align-self: center;

  // padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const StyledSummary = styled.div`
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

const NewOrderSummaryFooter = () => {
  const totalPrice = useSelector((state) => state.newOrderState.totalPrice);
  const dispatch = useDispatch();

  const handlePostNewOrder = () => {
    dispatch(newOrder());
    dispatch(checkMealAvailability());
    dispatch(lockIngredients());
    // dispatch(checkIngrAvailability())
    // dispatch(reserveProducts())
  };

  return (
    <StyledFooter>
      <StyledSummary>
        Podsumowanie:
        <div>{totalPrice.toFixed(2)} PLN</div>
      </StyledSummary>  
      <StyledEditButton onClick={() => handlePostNewOrder()}>
        Zamawiam
      </StyledEditButton>
    </StyledFooter>
  );
};

export default NewOrderSummaryFooter;
