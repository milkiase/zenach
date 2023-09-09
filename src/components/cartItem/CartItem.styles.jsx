import styled from 'styled-components'

export const CartItemComponent = styled.div`
    display: flex;
    justify-content: start;
    column-gap: 10px;
    margin-bottom: 10px;
    img{
        width: 30%;
    }
`

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ItemDetail = styled.span`
    font-size: 16px;
`
// .cart-item-container{
//     display: flex;
//     justify-content: start;
//     column-gap: 10px;
//     margin-bottom: 10px;
//     img{
//         width: 30%;
//     }
//     .item-details{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         .name{
//             font-size: 16px;
//         }
//     }
// }