import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { getCategoriesDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesAction } from '../../store/categories/categories.actions';
// import './Shop.styles'
import CategoriesPreview from '../categoriesPreview/CategoriesPreview';
import Category from '../category/Category';

const Shop = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategories = async ()=>{
            const fetchedCategories = await getCategoriesDocuments()
            dispatch(setCategoriesAction(fetchedCategories))
        }
        getCategories()
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>
    );
}

export default Shop;