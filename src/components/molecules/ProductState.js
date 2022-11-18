import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import lockIcon from "../../assets/lock.svg";
import diningIcon from "../../assets/dining.svg";
import scheduleIcon from "../../assets/schedule.svg";
import StateItem from "./StateItem";
import { timerTick } from "../../_actions/productActions";

const StyledProductState = styled.div`
  /* width: 80%; */
  display: flex;
  /* grid-template-columns: 3fr 3fr; */
  justify-content: space-around;
  padding: 0 20px;
`;

const ProductState = ({ inState, toPrepare }) => {
  // const toPrepare = useSelector(state => state.productReducer.productToDisplayOnRightSidebar.toPrepare)
  // const inState = useSelector(state => state.productReducer.productToDisplayOnRightSidebar)
  // console.log('prod_right', inState)
  return (
    <StyledProductState>
      {" "}
      {toPrepare ? (
        <StateItem icon={scheduleIcon} quantity={inState.preparation} />
      ) : (
        ""
      )}{" "}
      <StateItem icon={lockIcon} quantity={inState.locked} />{" "}
      <StateItem icon={diningIcon} quantity={inState.ready} />{" "}
    </StyledProductState>
  );
};

export default ProductState;
