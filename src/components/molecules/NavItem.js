import React from 'react'
import styled from 'styled-components'
import Icon from '../atoms/Icon'

const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
`
const StyledIcon = styled(Icon)`
    color: white;
    filter: invert(90%) saturate(24%) contrast(100%);
    width: 40px;
    height: 40px;
    background-size: 80%;
`

const NavItem = ({ itemName, itemIcon }) => {
    return (
        <StyledItem>
            {/* <StyledIcon itemIcon={itemIcon}>Icon</StyledIcon> */}
            <StyledIcon icon={itemIcon} />
            <span>{ itemName }</span>
        </StyledItem>
    )
}

export default NavItem