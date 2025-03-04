
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopContextProvider from "./Context/ShopContext";
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import brand_banner from './Components/Assets/brand_banner.jpg'
import newarrivals_banner from './Components/Assets/newarrivals_banner.jpg'
import collections_banner from './Components/Assets/collections_banner.jpg'
import Login from './Pages/Login';



function App() {
  return (
    <div>
       <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SHOP-BY-BRANDS' element={<ShopCategory banner={brand_banner} category='SHOP-BY-BRANDS'/>}/>
        <Route path='/NEW-ARRIVALS' element={<ShopCategory banner={newarrivals_banner}category='NEW-ARRIVALS'/>}/>
        <Route path='/COLLECTIONS' element={<ShopCategory banner={collections_banner} category='COLLECTIONS'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login />} /> {/* Separate Login Page */}
       
       
           
       
        
      </Routes>
     <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
