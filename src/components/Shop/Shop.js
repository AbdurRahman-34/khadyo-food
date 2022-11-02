import React, { useEffect, useState } from "react";
import ShopCart from "../ShopCart/ShopCart";
import "./Shop.css";

const Shop = () => {
  const [shops, setShop] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => {
        setShop(data.meals);
        console.log(data.meals);
      });
  }, []);
  return (
    <div className="Shop-container">
      <div className="shop-content container">
        <h5>
          <i>Food Items : {shops.length}</i>
        </h5>
        <h2>
          Popular <span>Dishes</span>
        </h2>

        <div className="card-container">
          {shops.map((shop) => (
            <ShopCart key={shop.idMeal} shop={shop}></ShopCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
