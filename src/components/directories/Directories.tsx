import { FC } from 'react';
import {DirectoriesComponent} from './Directories.styles';
import Directory from '../directory/Directory';
import { TDirectory } from '../../routes/home/Home';

type TDirectoriesProps = {
    directories: TDirectory[]
}
const Directories:FC<TDirectoriesProps> = ({directories})=>{
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