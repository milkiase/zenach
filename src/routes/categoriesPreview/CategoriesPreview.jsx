import {useSelector} from 'react-redux'
import {selectCategoriesMap} from '../../store/categories/categories.selectors';
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
const CategoriesPreview = ()=>{
    const categoriesMap = useSelector(selectCategoriesMap)
    return(
        <div>
            {
                Object.keys(categoriesMap).map((title)=>(<CategoryPreview key={title} title={title} products={categoriesMap[title]}/>))
            }
        </div>
    );
}

export default CategoriesPreview;