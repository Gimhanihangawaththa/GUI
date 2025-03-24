import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlist.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Fetch products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='product-list-full'>
            <h2>Product Catalog</h2>
            <div className='product-list-mid'>
                {products.length > 0 ? (
                    products.map(product => (
                        <div className='list-item-img' key={product.id}>
                            <h2>{product.id}</h2>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        
                            {product.image_url && (
                              
                                <img className='list-img'
                                    src={product.image_url}
                                    alt={product.name}
                                    width="150"
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;