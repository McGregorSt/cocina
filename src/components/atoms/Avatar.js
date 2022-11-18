import styled, { css } from 'styled-components'

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-size: 60%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: ${({ active, theme }) => (active ? `5px solid ${theme.notReady}` : '5px solid transparent')};
  border-radius: 30px;
  margin: 0 2px;
  &:hover {
    cursor: pointer;
  }

  ${({ active }) => 
    active && css`
      /* width: 35px;
      height: 35px;
      padding: 5px;
      background-size: 60%; */
      /* border: 1px solid ${({ theme }) => theme.notReady} */
      box-shadow: rgba(0, 0, 0, 0.26) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      opacity: 1;
    `
  }

  ${({ avatarType }) =>
    avatarType &&
    css`
      background-image: url(${avatarType});
    `}
`

export default Avatar
