import { useEffect, lazy, Suspense} from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategoriesInitAction } from '../../store/categories/categories.actions';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
const CategoriesPreview = lazy(() => import('../categoriesPreview/CategoriesPreview'));
const Category = lazy(() => import('../category/Category'));

const Shop = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesInitAction())
    }, [])
    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <Routes>
                <Route index element={<CategoriesPreview />}/>
                <Route path=":category" element={<Category />}/>
            </Routes>
        </Suspense>
    );
}

export default Shop;