import CategoriesList from './components/categoryItem/CategoriesList/CategoriesList';
const categories = [
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
    title: 'Women', 
    imgURL: 'https://i.ibb.co/GCCdy8t/womens.png'
  },
  {
    id: 5,
    title: 'Men', 
    imgURL: 'https://i.ibb.co/R70vBrQ/men.png'
  }
]

function App() {

  return (
      <CategoriesList categories={categories} />
  );
}

export default App;
