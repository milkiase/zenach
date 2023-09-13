import {DirectoriesComponent} from './Directories.styles'

import Directory from '../directory/Directory';


const Directories = ({directories})=>{
    return (
        <DirectoriesComponent>
            {
                directories.map((directory)=>(
                    <Directory  directory={directory} key={directory.id}/>
                ))
            }
        </DirectoriesComponent>
        
        // <div className="categories-container">
        // {
        //     categories.map((category)=>(
        //     <Directory  category={category} key={category.id}/>
        // ))
        // }
        // </div>
    );
}

export default Directories;