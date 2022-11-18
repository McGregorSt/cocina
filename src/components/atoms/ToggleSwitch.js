import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: #4cd964;
  padding-left: 0;
`;
const StyledInput = styled.input`
  display: none;
  &:checked ~ .teleport-switch-control-indicator {
    border-color: ${({ theme }) => theme.notReady};

    &:after {
      left: 22px;
      background-color: ${({ theme }) => theme.notReady};
    }
  }
  &:disabled ~ .teleport-switch-control-indicator {
    opacity: 0.4;
  }
`;
const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 10px;
  top: 4px;
  width: 42px;
  height: 22px;
  background: #fff;
  border-radius: 16px;
  transition: 0.15s;
  border: 2px solid #ccc;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: 0.15s;
    top: 2px;
    left: 2px;
    background: #ccc;
  }
`;

const ToggleSwitch = ({ checked }) => {
  return (
    <div>
      <StyledLabel className="custom-control teleport-switch">
        <StyledInput
          type="checkbox"
          className="teleport-switch-control-input"
          checked={checked}
        />
        <StyledSpan className="teleport-switch-control-indicator"></StyledSpan>
      </StyledLabel>
    </div>
  );
};

export default ToggleSwitch;
