import styled, { css } from 'styled-components'

const EditButton = styled.button`
  background-color: ${({ color, theme }) => (color ? color : theme.grey100)};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${({ size }) => size};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 0;
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ boxShadow, theme }) =>
    boxShadow ? theme.boxShadow.btn : 'none'};
  /* backdrop-filter: blur(3px); */
  position: relative;
  cursor: ${({ noPointer }) => (noPointer ? 'cursor' : 'pointer')};
  /* padding: 0; */
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          background-color: rgba(0, 0, 0, 0.06);
        }
      }
    `}
  // &:active {
  //   &:before{
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     border-radius: inherit;
  //     background-color: rgba(0, 0, 0, 0.15);

  //   } 
  }

  ${({ large }) =>
    large &&
    css`
      width: ${({ theme }) => theme.btnSize.large};
      height: ${({ theme }) => theme.btnSize.large};
    `}
  ${({ medium }) =>
    medium &&
    css`
      width: ${({ theme }) => theme.btnSize.medium};
      height: ${({ theme }) => theme.btnSize.medium};
    `}
  ${({ small }) =>
    small &&
    css`
      width: ${({ theme }) => theme.btnSize.small};
      height: ${({ theme }) => theme.btnSize.small};
    `}
`

export default EditButton
