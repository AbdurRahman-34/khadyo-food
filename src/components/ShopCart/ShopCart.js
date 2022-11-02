import React from 'react';
import { Link } from 'react-router-dom';
import './ShopCart.css'

const ShopCart = ({shop}) => {
    const {strMealThumb, strMeal, strInstructions, idMeal} = shop;
    return (
       <Link to={`/details-food/${idMeal}`}>
        <div className='card-main text-black'>
            <div className='shop-cart text-decoration-none'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 60)}</p>
            <p>Price : $ {idMeal.slice(0, 3)}</p>
        </div>
        </div>
       </Link>
    );
};

export default ShopCart;