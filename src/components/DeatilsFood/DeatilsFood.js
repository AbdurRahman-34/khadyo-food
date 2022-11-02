import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Deatils.css";

const DeatilsFood = () => {
  const { idMeal } = useParams();
  console.log(idMeal);
  const [detlas, setDetls] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetls(data.meals[0]);
        console.log(data.meals[0]);
      });
  }, [idMeal]);
  return (

    <div className="detalis-container mt-20">
      <div className="details-content">
        <img src={detlas.strMealThumb} alt="" />
        <h4>{detlas.strMeal}</h4>
        <p>Price : $ {detlas.idMeal}</p>
        <p> width : {detlas.strMeasure1}</p>
        <Link><Button variant="danger">Watch Now</Button></Link>
      </div>
    </div>
  );
};

export default DeatilsFood;
