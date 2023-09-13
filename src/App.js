import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.actions';
import Home from "./routes/home/Home";
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(checkUserSession())
}, [])
  return (
      <Routes >
        <Route path={'/'} element={<Navigation/>} >
          <Route index element={<Home/>}></Route>
          <Route path='shop/*' element={<Shop />} />
          <Route path="auth" element={<Authentication />}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='*' element={<div>hi</div>}/>
        </Route>
      </Routes>
  );
}

export default App;