import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationComponent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 0px 20px;
    position: relative;
`

export const NavLinks = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    align-items: center;
`
export const NavLink = styled(Link)`
    cursor: pointer;
    &:hover{
        font-weight: 900;
        color: rgb(141, 196, 214);
    }
`
