import React from 'react';
import './CSS/shopcategory2.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item2 from '../Components/Item2/Item2';

const ShopCategory2 = (props) => {

   
   
    return (
        <div className='shop-category2'>
            <img className='shopcategory2-banner' src={props.banner} alt="" />
            <div className="shopcategory2-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory2-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory2-products">
                
                        
                            <div  className="shopcategory2-item">
                                <Item2 /> 
                            </div>
                       
                   
            </div>
            <div className="shopcategory2-loadmore">
                Explore more
            </div>
        </div>
    );
}

export default ShopCategory2;


