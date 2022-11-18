import styled from "styled-components";

const StyledProductGroup = styled.div`
  min-width: 200px;
  min-height: 200px;
  border: 2px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 18px;
  margin: 20px;
  transition: 0.5s;
  background-color: ${({ theme, readyToPrepare, productGroup }) =>
  productGroup ? "" : readyToPrepare ? theme.ready : theme.notReady};
  &:hover {
    border: 2px dashed rgba(0, 0, 0, 0.6);
    font-size: 20px;
    // font-weight: 400;
    transition: 0.2s;
    cursor: ${({ productGroup, readyToPrepare }) => productGroup ? 'pointer' : readyToPrepare ? 'pointer' : 'not-allowed'};
    background-color: ${({ theme, readyToPrepare, productGroup }) =>
      productGroup ? "rgba(255, 255, 255, 0.25)" : readyToPrepare ? theme.readyLight : ""};
}
`;

export default StyledProductGroup;
