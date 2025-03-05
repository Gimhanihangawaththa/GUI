import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product, addToCart } = useContext(ShopContext);
    const navigate = useNavigate(); 

   
    const handleAddToCart = (item) => {
        addToCart(item.id);  
        navigate('/Cart');    
    };

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <div key={i} className="shopcategory-item">
                                <Item 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.image} 
                                    new_price={item.new_price} 
                                    old_price={item.old_price} 
                                />
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    );
}

export default ShopCategory;

