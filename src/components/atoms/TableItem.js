import React from "react";
import styled from "styled-components";
import EditButton from "../atoms/EditButton";
import btnBin from "../../assets/remove.svg";
import btnReady from "../../assets/check-round.svg";
import btnLock from "../../assets/lock.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  preparationReady,
  stockEntryRemove,
} from "../../_actions/productActions";

const StyledTableItem = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.5fr 1.2fr 0.8fr 0.8fr 0.8fr;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.opacityBackground};
  border-radius: 5px;
  margin-bottom: 2px;
  padding: 10px;
  & > * {
    margin: 0 10px;
    padding: 15px 25px;
  }
`;

const StyledTime = styled.div`
  width: 100px;
`;

const TableItem = ({ index, time, qty, timeDiff, id, productId }) => {
  const dispatch = useDispatch();

  const inState = useSelector(
    (state) => state.productReducer.productToDisplayOnRightSidebar.inState
  );

  const handlePrepareEntry = (id, productId) => {
    dispatch(preparationReady(id, productId));
    // dispatch(changeStatus())
  };
  const handleRemoveEntry = (id, productId) => {
    dispatch(stockEntryRemove(id, productId));
    // dispatch(changeStatus(id, productId))
  };

  return (
    <StyledTableItem>
      <div>{index}</div>
      {/* <StyledTime>{time === `undefined:undefined:undefined` ? '00:00:00' : `${time}`}</StyledTime> */}
      <StyledTime>{time === `00:00:00` ? `` : `${time}`}</StyledTime>
      <div>{qty}</div>
      {/* <div>{timeDiff}</div> */}
      {inState.locked >= index ? (
        <EditButton
          icon={btnLock}
          width="50px"
          height="50px"
          radius="5px"
          onClick={() => console.log("lock")}
          noPointer
        />
      ) : (
        <div></div>
      )}

      {timeDiff <= 0 ? (
        <EditButton
          icon={btnReady}
          width="50px"
          height="50px"
          radius="5px"
          onClick={() => handlePrepareEntry(id, productId)}
        />
      ) : (
        <div></div>
      )}
      <EditButton
        icon={btnBin}
        width="50px"
        height="50px"
        radius="5px"
        onClick={() => handleRemoveEntry(id, productId)}
      />
    </StyledTableItem>
  );
};

export default TableItem;
