import {Routes, Route} from 'react-router-dom'
import Home from "./routes/home/Home";
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
function App() {
  return (
      <Routes >
        <Route path={'/'} element={<Navigation/>} >
          <Route index element={<Home/>}></Route>
          <Route path='shop' element={<Shop />} />
          <Route path="auth" element={<Authentication />}/>
          <Route path='*' element={<div></div>}/>
        </Route>
      </Routes>
  );
}

export default App;
