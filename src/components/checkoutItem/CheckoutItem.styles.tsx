import styled from 'styled-components'

export const CheckoutItemComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid gray;
    img{
        width: 120px;
    }
`

export const CheckoutBtn = styled.button`
    cursor: pointer;
    border: none;
    cursor: pointer;
    background-color: inherit;
    font-size: large;
    color: grey;
    &:hover{
        font-weight: bolder;
        color: black;
    }
`
