import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopContextProvider from "./Context/ShopContext";
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import ShopCategory2 from './Pages/ShopCategory2';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';  
import Signup from './Pages/Signup'; 
import Footer from './Components/Footer/Footer';
import brand_banner from './Components/Assets/brand_banner.jpg'
import newarrivals_banner from './Components/Assets/newarrivals_banner.jpg'
import collections_banner from './Components/Assets/collections_banner.jpg'
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import SingleProduct from './Pages/SingleProduct';





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
        <Route path='/COLLECTIONS' element={<ShopCategory2 banner={collections_banner} category='COLLECTIONS'/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}></Route>
        <Route path="/ProductForm" element={<ProductForm/>}></Route>
        <Route path="/ProductList" element={<ProductList/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} /> 
      
          </Routes>
     <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;



