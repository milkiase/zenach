import { useNavigate } from 'react-router-dom';
import {CategoryPreviewComponent, Title, Preview} from './CategoryPreview.styles'
import ProductCard from '../productCard/ProductCard';
const CategoryPreview = ({products, title})=>{
    const navigatort  = useNavigate()
    const goToFullCategory = (category)=>{
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