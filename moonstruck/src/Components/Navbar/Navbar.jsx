import React from 'react'
import './Navbar.css'
import cart_icon from'../Assets/cart_icon.png'



const Navbar = () => {
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
        <li>HOME<hr/></li>
        <li>SHOP BY BRANDS</li>
        <li>NEW ARRIVALS</li>
        <li>COLLECTIONS</li>
      </ul>
      </div>
      
    </div>
   
  )
}

export default Navbar
