import {createContext, useState, useEffect} from 'react'
import SHOP_DATA from '../shop-data.json'
export const ProductsContext = createContext({
    products: [],
    setProducts: () => []
})

export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState([])
    const contextValue = {products, setProducts}
    useEffect(()=>{
        setProducts(()=>SHOP_DATA)
    }, [])
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
}
