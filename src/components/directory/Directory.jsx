import { useNavigate } from 'react-router-dom';
import {DirectoryBody, DirectoryItemComponent} from './Directory.styles.jsx';
const Directory = ({directory: {title, imgURL}})=>{
    const navigator = useNavigate()
    const shopNow = (goTo)=>{
        navigator(`shop/${goTo.toLowerCase()}`)
    }
    return (
        <DirectoryItemComponent imageurl={imgURL}>
            <DirectoryBody onClick={()=>{shopNow(title)}}>
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </DirectoryBody>
        </DirectoryItemComponent>
        // <div className="category-item-container" style={{
        //     backgroundImage: `url(${imgURL})`,
        // }}>
        //     <div className="category-body-container" onClick={()=>{shopNow(title)}}>
        //         <h2>{title.toUpperCase()}</h2>
        //         <p>SHOP NOW</p>
        //     </div>
        // </div>
    );
}

export default Directory;