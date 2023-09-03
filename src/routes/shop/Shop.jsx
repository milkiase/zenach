import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategoriesInitAction } from '../../store/categories/categories.actions';
import CategoriesPreview from '../categoriesPreview/CategoriesPreview';
import Category from '../category/Category';

const Shop = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesInitAction())
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>
    );
}

export default Shop;