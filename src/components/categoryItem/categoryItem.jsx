import './categoryItem.styles.scss'
const CategoryItem = ({category: {title, imgURL}})=>{
    return (
        <div className="category-container" style={{
            backgroundImage: `url(${imgURL})`,
        }}>
            <div className="category-body-container" >
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}

export default CategoryItem