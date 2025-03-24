// import React, { useState } from 'react';
// import './CSS/singleProduct.css';
// import { useParams } from 'react-router-dom';
// import cart_icon from '../Assets/cart_icon.png';

// const SingleProduct = ({ allProducts, addToCart }) => {
//   const { productId } = useParams();
//   const product = allProducts.find(p => p.id.toString() === productId);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return <div className="product-not-found">Product not found!</div>;
//   }

//   return (
//     <div className="product-container">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <h2>{product.name}</h2>
//         <p className="product-price">Rs. {product.price}</p>
//         <p className="product-description">{product.description}</p>
//         <div className="quantity-selector">
//           <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
//           <span>{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)}>+</button>
//         </div>
//         <div className="product-actions">
//           <button className="buy-now">Buy Now</button>
//           <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
//             <img src={cart_icon} alt="Cart" /> Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;






import React, { useState } from 'react';
import './CSS/singleproduct.css';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import cart_icon from '../Components/Assets/cart_icon.png';
// import image from '../Components/Assets/n5_img.jpg'

const SingleProduct = () => {
//   const { productId } = useParams();
//   const product = allProducts.find(p => p.id.toString() === productId);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return <div className="product-not-found">Product not found!</div>;
//   }


const location = useLocation();
const product = location.state?.product;

const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image_url} alt='' />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="product-price">Rs.{product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-selector">
          {/* <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button> */}
        </div>
        <div className="product-actions">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">
            <img src={cart_icon} alt="Cart" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


