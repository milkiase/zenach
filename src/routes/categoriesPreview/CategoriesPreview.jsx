import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
const CategoriesPreview = ()=>{
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        <div>
            {
                Object.keys(categoriesMap).map((title)=>(<CategoryPreview key={title} title={title} products={categoriesMap[title]}/>))
            }
        </div>
    );
}

export default CategoriesPreview;