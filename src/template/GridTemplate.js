import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`

const GridTemplate = ({ children }) => {
  return (
    <div>
      <StyledGrid>{children}</StyledGrid>
    </div>
  )
}

export default GridTemplate
