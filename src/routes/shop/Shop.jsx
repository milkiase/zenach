import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';

import './Shop.styles.scss'
import ProductCard from '../../components/productCard/ProductCard';

const Shop = ()=>{
    const {products} = useContext(ProductsContext)
    return (
        <div className='products-container'>
            {products.map((product)=> <ProductCard product={product} key={product.id}/>
        )}
        </div>
    );
}

export default Shop;