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
        // <div className="category-preview-container">
        //     <h1 className="title">
        //         <span onClick={()=>goToFullCategory(title)}>{title.toUpperCase()}</span>
        //     </h1>
        //     <div className="preview">
        //         {products.map((product, index)=> {
        //             if(index < 4){
        //                 return <ProductCard product={product} key={product.id}/>
        //             }
        //             return null
        //         })}
        //     </div>
        // </div>
    );
}

export default CategoryPreview;