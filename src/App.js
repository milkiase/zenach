import { useEffect, lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.actions';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

const Home = lazy(()=> import("./routes/home/Home"));
const Navigation = lazy(()=> import('./routes/navigation/Navigation'));
const Authentication = lazy(()=> import('./routes/authentication/Authentication'));
const Shop = lazy(()=> import('./routes/shop/Shop'));
const Checkout = lazy(()=> import('./routes/checkout/Checkout'));

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(checkUserSession())
}, [])
  return (
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes >
          <Route path={'/'} element={<Navigation/>} >
            <Route index element={<Home/>}></Route>
            <Route path='shop/*' element={<Shop />} />
            <Route path="auth" element={<Authentication />}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='*' element={<div>hi</div>}/>
          </Route>
        </Routes>
      </Suspense>
  );
}

export default App;