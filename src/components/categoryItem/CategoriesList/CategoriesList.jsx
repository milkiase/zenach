import './CategoriesList.styles.scss'
import CategoryItem from '../categoryItem';
const CategoriesList = ({categories})=>{
    return (
        <div className="categories-container">
        {
            categories.map((category)=>(
            <CategoryItem  category={category} key={category.id}/>
        ))
        }
        </div>
    );
}

export default CategoriesList;