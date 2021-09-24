import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product-container'>
            <div className='product-details'>
                <div className='product-img'>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                    <h3 style={{color: 'blue'}}>{name}</h3>
                    <p>by: {seller}</p>
                    <p>Price: ${price}</p>
                    <p>only {stock} left in stock- order soon</p>
                    <button className='btn-regular'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;