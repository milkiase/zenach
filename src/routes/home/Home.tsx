import Directories from '../../components/directories/Directories';

export type TDirectory = {
    id: number,
    title: string,
    imgURL: string
}
const directories: TDirectory[] = [
    {
        id: 1,
        title: 'Hats', 
        imgURL: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
        id: 2,
        title: 'Jackets', 
        imgURL: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
        id: 3,
        title: 'Sneakers', 
        imgURL: 'https://i.ibb.co/0jqHpnp/sneakrs.png'
    },
    {
        id: 4,
        title: 'Womens', 
        imgURL: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
        id: 5,
        title: 'Mens', 
        imgURL: 'https://i.ibb.co/R70vBrQ/men.png'
    }
]

function Home() {

    return (
        <Directories directories={directories} />
    );
}

export default Home;