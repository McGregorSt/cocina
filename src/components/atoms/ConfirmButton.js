import check from '../../assets/check-round.svg'
import styled from 'styled-components'

const ConfirmButton = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${check});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

export default ConfirmButton;
