import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';
import {CategoryComponent, CategoryTitle} from './Category.styles'
import ProductCard from '../../components/productCard/ProductCard';

const Category = ()=>{
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
    <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryComponent>
            {
                products?.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryComponent>
        </>
    );
}

export default Category;