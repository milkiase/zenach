import styled from 'styled-components';

export const CheckoutComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 65%;
`
export const CheckoutItemComponent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    :last-child{
        margin: 0 auto;
    }
`

export const TotalPrice = styled.div`
    width: 100%;
    padding: 20px 0;
    p{
        margin-left: auto;
        width: fit-content;
        font-size: x-large;
    }
`
// .checkout-container{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 0 auto;
//     width: 65%;
//     .checkout-item{
//         width: 100%;
//         display: grid;
//         grid-template-columns: repeat(5, 1fr);
//         border-bottom: 1px solid gray;
//         padding-bottom: 20px;
//         .remove{
//             margin: 0 auto;
//         }
//     }
//     .total-price{
//         width: 100%;
//         padding: 20px 0;
//         p{
//             margin-left: auto;
//             width: fit-content;
//             font-size: x-large;
//         }
//     }
// }