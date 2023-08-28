import { useState, useEffect, useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { useParams } from 'react-router-dom';
import {CategoryComponent, CategoryTitle} from './Category.styles'
import ProductCard from '../../components/productCard/ProductCard';

const Category = ()=>{
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
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
        {/* <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className="category-container">
            {
                products?.map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div> */}
        </>
    );
}

export default Category;