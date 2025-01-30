import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const[menu,setMenu] = useState("HOME");
  return (
    <div className='navbar'>

      <div className='up'>
        <div className="nav-logo">
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/Cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">0</div>
      </div>
      </div>
      </div>
      
      <div className="nav-minibar">
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("HOME")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>HOME</Link>{menu==="HOME"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("SHOP-BY-BRANDS")}}><Link style={{textDecoration:'none', color:'white'}} to='/SHOP-BY-BRANDS'>SHOP BY BRANDS</Link>{menu==="SHOP-BY-BRANDS"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("NEW-ARRIVALS")}}><Link style={{textDecoration:'none', color:'white'}} to='/NEW ARRIVALS'>NEW ARRIVALS</Link>{menu==="NEW-ARRIVALS"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("COLLECTIONS")}}><Link style={{textDecoration:'none' ,color:'white'}}to='/COLLECTIONS'>COLLECTIONS</Link>{menu==="COLLECTIONS"?<hr/>:<></>}</li>
      </ul>
      </div>
      
    </div>
   
  )
}

export default Navbar
