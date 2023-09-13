enum CATEGORIES_ACTION_TYPES {
    SET_CATEGORIES= 'categories/SET_CATEGORIES',
    FETCH_CATEGORIES_INIT = 'categories/FETCH_CATEGORIES_INIT',
    FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'categories/FETCH_CATEGORIES_FAILED',

}

export type TCategoryItem = {
    id: number,
    name: string,
    imageURL: string,
    price: number
}

export type TCategory = {
    title: string,
    items: TCategoryItem[]
}

export type TCategoryMap = {
    [key: string]: TCategoryItem[]
}
export default CATEGORIES_ACTION_TYPES;