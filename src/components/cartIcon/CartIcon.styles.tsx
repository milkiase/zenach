import styled, {css} from 'styled-components'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

export const CartIconComponent = styled.div`
    position: relative;
    cursor: pointer;
    .shopping-bag{
        width: 35px;
        height: 35px;
    }
`
type TItemCountProps = {
    cartCount : number
}
const singleRight = css`
    right: 15px;
`
const doubleRight = css`
    right: 12.5px;
`
const tripleRight = css`
    right: 9.7px;
`
export const ItemCount = styled.span<TItemCountProps>`
    position: absolute;
    right: ${({cartCount})=> {
        let cartCountlength = cartCount.toString().length
        switch (cartCountlength) {
            case 1:
                return '15px'
            case 2:
                return '12.5px'
            case 3: 
                return '9.7px'
            default:
                return '6px'
        }
    }};
    top: 19px;
    font-size: x-small;
    font-weight: bolder;
`
export const ShoppingIcon = styled(ShoppingBag)`
    width: 35px;
    height: 35px;
`
