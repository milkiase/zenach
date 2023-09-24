import styled from 'styled-components'


export const CartDropdownComponent = styled.div`
    position: absolute;
    right: 0;
    top: 65px;
    z-index: 1;
    background-color: white;
    border: 1px solid black;
    padding: 20px;
    width: 225px;
    display: flex;
    flex-direction: column;
`
export const CartList = styled.div`
    height: 250px;
    overflow: auto;
    display: flex;
    flex-direction: column;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`