import { useNavigate } from 'react-router-dom';
import {CategoryPreviewComponent, Title, Preview} from './CategoryPreview.styles'
import ProductCard from '../productCard/ProductCard';
import { TCategoryItem } from '../../store/categories/categories.types';

type TCategoryPreviewProps = {
    products: TCategoryItem[],
    title: string
}
const CategoryPreview = ({products, title}:TCategoryPreviewProps)=>{
    const navigatort  = useNavigate()
    const goToFullCategory = (category:string)=>{
        navigatort(category)
    }
    return (
        <CategoryPreviewComponent>
            <Title>
                <span onClick={()=>goToFullCategory(title)}>{title.toUpperCase()}</span>
            </Title>
            <Preview>
            {products.map((product, index)=> {
                if(index < 4){
                    return <ProductCard product={product} key={product.id}/>
                }
                return null
            })}
            </Preview>
        </CategoryPreviewComponent>
    );
}

export default CategoryPreview;