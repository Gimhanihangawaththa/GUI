import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from'../Assets/cart_icon.png'



const Navbar = () => {
  const[menu,setMenu] = useState("HOME");
  return (
    <div className='navbar'>

      <div className='up'>
        <div className="nav-logo">
        <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className="nav-cart-count">0</div>
      </div>
      </div>
      </div>
      
      <div className="nav-minibar">
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("HOME")}}>HOME{menu==="HOME"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("SHOP BY BRANDS")}}>SHOP BY BRANDS{menu==="SHOP BY BRANDS"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("NEW ARRIVALS")}}>NEW ARRIVALS{menu==="NEW ARRIVALS"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("COLLECTIONS")}}>COLLECTIONS{menu==="COLLECTIONS"?<hr/>:<></>}</li>
      </ul>
      </div>
      
    </div>
   
  )
}

export default Navbar
