
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './item2.css'


const Item = () => {


    const navigate = useNavigate(); 
  

  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}, []);




const handleBuyNow = (product) => {
    navigate('/singleProduct', { state: { product } });
  };



  return (


    products.map(product => (


    <div  key={product.id}  onClick={() => handleBuyNow(product)}  className='item2'>

        <div className='item2-img-div'>
             <img className='item2-img' src={product.image_url} alt='' />
        </div>
       
       <p>{product.name}</p>

       <div className="item2-prices">
        
        <div className="item2-price-new"> Rs.{product.price}</div> 
        <div className="item2-price-old"> Rs.{product.description} </div>  
       
        </div>  

        
             <button className="add-to-cart-btn2"> Add to Cart</button> 
        

          
    </div>

))

);

}

export default Item


