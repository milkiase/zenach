import { useNavigate } from 'react-router-dom';
import './categoryItem.styles.scss';
const CategoryItem = ({category: {title, imgURL}})=>{
    const navigator = useNavigate()
    const shopNow = (goTo)=>{
        navigator(`shop/${goTo.toLowerCase()}`)
    }
    return (
        <div className="category-item-container" style={{
            backgroundImage: `url(${imgURL})`,
        }}>
            <div className="category-body-container" onClick={()=>{shopNow(title)}}>
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}

export default CategoryItem;