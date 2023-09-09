import styled from 'styled-components'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
export const CartIconComponent = styled.div`
position: relative;
cursor: pointer;
.shopping-bag{
    width: 35px;
    height: 35px;
}
`

export const ItemCount = styled.span`
    position: absolute;
    right: 14px;
    top: 19px;
    font-size: x-small;
    font-weight: bolder;
`
export const ShoppingIcon = styled(ShoppingBag)`
    width: 35px;
    height: 35px;
`
// .cart-icon-container{
//     position: relative;
//     cursor: pointer;
//     .shopping-bag{
//         width: 35px;
//         height: 35px;
//     }
//     .item-count{
//         position: absolute;
//         right: 14px;
//         top: 19px;
//         font-size: x-small;
//         font-weight: bolder;
//     }
// }