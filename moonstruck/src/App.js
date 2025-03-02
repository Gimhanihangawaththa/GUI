
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SHOP-BY-BRANDS' element={<ShopCategory category='SHOP-BY-BRANDS'/>}/>
        <Route path='/NEW-ARRIVALS' element={<ShopCategory category='SHOP-BY-BRANDS'/>}/>
        <Route path='/COLLECTIONS' element={<ShopCategory category='COLLECTIONS'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
