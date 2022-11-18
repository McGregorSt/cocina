import styled from 'styled-components'

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;


` 

export default Icon;