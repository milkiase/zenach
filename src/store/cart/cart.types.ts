import { TCategoryItem } from "../categories/categories.types";
enum CART_ACTION_TYPES {
    SET_IS_CART_OPEN= 'cart/SET_IS_CART_OPEN',
    SET_CART_ITEMS= 'cart/SET_CART_ITEMS',
    CLEAR_CART_ITEMS= 'cart/CLEAR_CART_ITEMS'
}

export type TCartItem = TCategoryItem & {
    quantity: number
}

export default CART_ACTION_TYPES;