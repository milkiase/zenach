import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {DirectoryBody, DirectoryItemComponent} from './Directory.styles';

type TDirectoryProps = {
    directory: {
        title: string,
        imgURL: string
    }
}

const Directory:FC<TDirectoryProps> = ({directory: {title, imgURL}})=>{
    const navigator = useNavigate()
    const shopNow = (goTo:string)=>{
        navigator(`shop/${goTo.toLowerCase()}`)
    }
    return (
        <DirectoryItemComponent imageurl={imgURL}>
            <DirectoryBody onClick={()=>{shopNow(title)}}>
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </DirectoryBody>
        </DirectoryItemComponent>
    );
}

export default Directory;