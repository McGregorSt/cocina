import React from 'react';
import styled from 'styled-components'

const StyledGrid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
  overflow-x: auto; */
  /* scroll: none; */
  padding: 20px;
  /* display: flex; */
  /* height: 80vh; */
  
  ::-webkit-scrollbar {
    display: none
  }
  `

const GridTemplate = ({ children }) => {
  return (
    <div>
        <StyledGrid >
          { children }
        </StyledGrid>
    </div>
  );
}

export default GridTemplate;
