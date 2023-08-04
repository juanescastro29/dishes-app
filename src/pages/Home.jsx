import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await fetch("https://api-dishes.vercel.app/");
      const data = await response.json();
      setDishes(data.data);
    }
    fetchDishes();
  }, []);

  return (
    <div className="container p-2">
      <div className="container p-2">
        <h1>View dishes</h1>
      </div>
      <div className="container p-2">
        <Link to="/createDish">
          <button className="btn btn-primary">Create dish</button>
        </Link>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">idDish</th>
            <th scope="col">Name</th>
            <th scope="col">Calories</th>
            <th scope="col">Is Vegetarian</th>
            <th scope="col">Value</th>
            <th scope="col">Comments</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish._id}>
              <th scope="row">{dish.idDish}</th>
              <td>{dish.name}</td>
              <td>{dish.calories}</td>
              <td>{dish.isVegetarian ? "Si" : "No"}</td>
              <td>{dish.value}</td>
              <td>{dish.comments}</td>
              <td>
                <Link to="/viewDish" state={dish._id}>
                  <button className="btn btn-primary">View Dish</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
