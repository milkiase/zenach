import styled from 'styled-components';

export const ProductCardComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    img{
        width: 100%;
        height: 320px;
        object-fit: cover;
        margin-bottom: 5px;
    }
    button{
        width: 80%;
        position: absolute;
        opacity: 0.7;
        top: 225px;
        display: none;
    }
    &:hover{
        img{
            opacity: 0.8;
        }
        button{
            display: inline-block;
        }
    }
`
export const ProductFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
    span{
        color: black;
        font-size: 18px;
        font-weight: 500;
    }
`
// .product-card-container{
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     height: 350px;
//     align-items: center;
//     position: relative;
//     img{
//         width: 100%;
//         height: 320px;
//         object-fit: cover;
//         margin-bottom: 5px;
//     }
//     button{
//         width: 80%;
//         position: absolute;
//         opacity: 0.7;
//         top: 225px;
//         display: none;
//     }
//     &:hover{
//         img{
//             opacity: 0.8;
//         }
//         button{
//             display: inline-block;
//         }
//     }
//     .product-card-footer{
//         width: 100%;
//         display: flex;
//         justify-content: space-between;
//         padding-right: 5px;
//         .name,.price{
//             color: black;
//             font-size: 18px;
//             font-weight: 500;
//         }
//     }
// }