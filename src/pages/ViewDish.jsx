import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ViewDish = () => {
  const location = useLocation();
  const [dish, setDish] = useState({});

  useEffect(() => {
    const _id = location.state;
    async function fetchDish() {
      const responde = await fetch(`https://api-dishes.vercel.app/${_id}`);
      const data = await responde.json();
      setDish(data.data);
    }
    fetchDish();
  }, [location]);

  return (
    <>
      <div className="container p-3">
        <h1>View Dish</h1>
      </div>
      <div className="container p-3">
        <Link to="/">
          <button className="btn btn-primary">Go back</button>
        </Link>
      </div>
      <div className="container d-flex justify-content-center align-items-center p-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              The calories are {dish.calories}
            </h6>
            <p className="card-text">
              {dish.comments}. <br /> The value of the dish is: {dish.value}.
              <br /> Is vegetarian: {dish.isVegetarian ? "Yes" : "No"}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDish;
