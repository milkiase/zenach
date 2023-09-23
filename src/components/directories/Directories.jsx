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
        
    );
}

export default Directories;