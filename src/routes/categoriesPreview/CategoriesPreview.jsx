import {useSelector} from 'react-redux'
import {selectCategoriesMap, selectCategoriesIsLoading} from '../../store/categories/categories.selectors';
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
const CategoriesPreview = ()=>{
    const categoriesMap = useSelector(selectCategoriesMap)
    const isCategoriesLoading = useSelector(selectCategoriesIsLoading)
    return(
        <div>
            {
                isCategoriesLoading ? <LoadingSpinner></LoadingSpinner> :
                Object.keys(categoriesMap).map((title)=>(<CategoryPreview key={title} title={title} products={categoriesMap[title]}/>))
            }
            
        </div>
    );
}

export default CategoriesPreview;