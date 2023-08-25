import {createContext, useState, useEffect} from 'react'
// import SHOP_DATA from '../shop-data.js'
import { getCategoriesDocuments } from '../utils/firebase/firebase.utils.js'
export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => []
})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({})
    const contextValue = {categoriesMap, setCategoriesMap}
    useEffect(()=>{
        const getCategories = async ()=>{
            const fetchedCategories = await getCategoriesDocuments()
            setCategoriesMap(fetchedCategories)
        }
        getCategories()
    }, [])
    return (
        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    );
}
