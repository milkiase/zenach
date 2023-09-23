import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selectors';
import {CategoryComponent, CategoryTitle} from './Category.styles'
import ProductCard from '../../components/productCard/ProductCard';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import {TCategoryItem } from '../../store/categories/categories.types';

type TCategoryUseParams = {
    category: string
}
const Category = ()=>{
    const {category} = useParams<keyof TCategoryUseParams>() as TCategoryUseParams;
    const categoriesMap = useSelector(selectCategoriesMap)
    const isCategoriesLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState([] as TCategoryItem[])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
    <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {
            isCategoriesLoading ? <LoadingSpinner /> :
            <CategoryComponent>
            {
                products?.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryComponent>
        }
        </>
    );
}

export default Category;